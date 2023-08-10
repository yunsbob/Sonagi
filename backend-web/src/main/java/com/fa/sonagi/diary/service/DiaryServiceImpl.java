package com.fa.sonagi.diary.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.diary.dto.DiaryPostDto;
import com.fa.sonagi.diary.dto.DiaryPutDto;
import com.fa.sonagi.diary.dto.DiaryResDto;
import com.fa.sonagi.diary.entity.Diary;
import com.fa.sonagi.diary.entity.DiaryFile;
import com.fa.sonagi.diary.repository.DiaryRepository;
import com.fa.sonagi.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class DiaryServiceImpl implements DiaryService {
	private final DiaryRepository diaryRepository;
	private final UserRepository userRepository;
	private final BabyRepository babyRepository;
	private final S3File s3File;

	@Override
	@Transactional
	public void createDiary(DiaryPostDto diaryPostDto, List<MultipartFile> imgFiles) throws Exception {
		String userName = userRepository
			.findById(diaryPostDto.getUserId())
			.orElseThrow()
			.getName();

		// diary 생성
		Diary diary = Diary
			.builder()
			.babyId(diaryPostDto.getBabyId())
			.userName(userName)
			.diaryFiles(new ArrayList<>())
			.content(diaryPostDto.getContent())
			.build();

		// file 업로드 + Diary Entity에 일대 다 등록
		imgFiles
			.stream()
			.map((imgFile) -> {
				try {
					return s3File.upload(imgFile, "img");
				} catch (Exception e) {
					log.error("File UploadError : {}", e.getMessage());
					throw new RuntimeException(e);
				}
			})
			.forEach((url) -> {
				DiaryFile diaryFile = DiaryFile
					.builder()
					.fileName(url)
					.build();
				diary.addDiaryFile(diaryFile);
			});

		log.info("img upload successfully");

		// Diary repository에 entity build 후 save
		diaryRepository.save(diary);

		Baby baby = babyRepository
			.findById(diaryPostDto.getBabyId())
			.orElseThrow();

		baby.updateLastDiaryTime(LocalDateTime.now(ZoneId.of("Asia/Seoul")));
		babyRepository.save(baby);
	}

	@Override
	@Transactional
	public void updateDiaryContent(DiaryPutDto diaryPutDto, List<MultipartFile> imgFiles) throws Exception {
		// diary content 수정
		Diary diary = diaryRepository
			.findById(diaryPutDto.getDiaryId())
			.orElseThrow();
		diary.updateContent(diaryPutDto.getContent());

		// 새로 사진 추가 및 업로드
		for (MultipartFile imgFile : imgFiles) {
			String url = s3File.upload(imgFile, "img");
			DiaryFile diaryFile = DiaryFile
				.builder()
				.fileName(url)
				.build();
			diary.addDiaryFile(diaryFile);
		}

		// 삭제할 리스트는 삭제
		for (String removeFile : diaryPutDto.getRemoveFiles()) {
			s3File.delete(removeFile);

			List<DiaryFile> list = diary
				.getDiaryFiles()
				.stream()
				.filter((diaryFile -> diaryFile
					.getFileName()
					.equals(removeFile)))
				.toList();

			for (int i = 0; i < list.size(); i++) {
				DiaryFile diaryFile = list.get(i);
				diary.removeDiaryFile(diaryFile);
			}

		}
		diaryRepository.save(diary);
	}

	@Override
	@Transactional
	public void deleteDiary(Long diaryId) {
		diaryRepository.deleteById(diaryId);
	}

	@Override
	public DiaryResDto.DiaryInfos selectAllByBabyIdAndWriteDay(Long babyId, LocalDate writeDay) throws Exception {
		DiaryResDto.DiaryInfos diaryInfos = new DiaryResDto.DiaryInfos();
		List<DiaryResDto.DiaryInfo> diaryInfoList = new ArrayList<>();

		List<Diary> diaries = diaryRepository
			.findByBabyIdAndCreatedDate(babyId, writeDay);

		for (Diary diary : diaries) {
			List<String> urlList = diary
				.getDiaryFiles()
				.stream()
				.map(DiaryFile::getFileName)
				.toList();
			DiaryResDto.DiaryInfo diaryInfo = DiaryResDto.DiaryInfo
				.builder()
				.diaryId(diary.getId())
				.userName(diary.getUserName())
				.writeDay(diary.getCreatedDate())
				.imgUrls(urlList)
				.content(diary.getContent())
				.build();
			diaryInfoList.add(diaryInfo);
		}
		diaryInfos.setDiaries(diaryInfoList);
		return diaryInfos;
	}

	@Override
	public List<LocalDate> findAllDiaryByMonth(LocalDate curDate, Long babyId) {
		List<LocalDate> dateList = new ArrayList<>();

		LocalDate startDate = curDate.withDayOfMonth(1);
		LocalDate endDate = curDate.withDayOfMonth(curDate.lengthOfMonth());
		List<Diary> diaryList = diaryRepository.findByBabyIdAndCreatedDateGreaterThanEqualAndCreatedDateLessThanEqual(babyId, startDate, endDate);

		for (Diary diary : diaryList) {
			dateList.add(diary.getCreatedDate());
		}
		return dateList;
	}
}
