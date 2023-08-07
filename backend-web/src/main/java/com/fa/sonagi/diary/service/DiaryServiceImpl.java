package com.fa.sonagi.diary.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.fa.sonagi.diary.dto.DiaryPostDto;
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
	private final S3File s3File;

	@Override
	public void createDiary(DiaryPostDto diaryPostDto) throws Exception {
		String userName = userRepository
			.findById(diaryPostDto.getUserId())
			.orElseThrow()
			.getUsername();

		// diary 생성
		Diary diary = Diary
			.builder()
			.babyId(diaryPostDto.getBabyId())
			.userName(userName)
			.content(diaryPostDto.getContent())
			.build();

		// file 업로드 + Diary Entity에 일대 다 등록
		diaryPostDto
			.getImgFiles()
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
	}

	@Override
	public void addDiaryImg(Long diaryId, MultipartFile imgFile) throws Exception {
		Diary diary = diaryRepository
			.findById(diaryId)
			.orElseThrow();
		// file 업로드
		String url = s3File.upload(imgFile, "img");
		// 파일 등록 후 저장
		DiaryFile diaryFile = DiaryFile
			.builder()
			.fileName(url)
			.build();
		diary.addDiaryFile(diaryFile);
		// Entity 반영
		diaryRepository.save(diary);
	}

	@Override
	public void deleteDiaryImage(Long diaryId, String imageUrl) throws Exception {
		Diary diary = diaryRepository
			.findById(diaryId)
			.orElseThrow();
		// file delete
		s3File.delete(imageUrl);
		// 해당 url 엔티티 반영
		diary
			.getDiaryFiles()
			.stream()
			.filter((diaryFile) -> diaryFile
				.getFileName()
				.equals(imageUrl))
			.forEach(diary::removeDiaryFile);
		// Entity 반영
		diaryRepository.save(diary);
	}

	@Override
	public void updateDiaryContent(Long diaryId, String content) {
		Diary diary = diaryRepository
			.findById(diaryId)
			.orElseThrow();
		// dairy 내용 수정
		diary.updateContent(content);
		diaryRepository.save(diary);
	}

	@Override
	public void deleteDiary(Long diaryId) {
		diaryRepository.deleteById(diaryId);
	}

	@Override
	public List<LocalDate> findAllDiaryByMonth(LocalDate curDate) {

		return null;
	}
}
