package com.fa.sonagi.diary.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.fa.sonagi.diary.dto.DiaryPostDto;

public interface DiaryService {

	// 일기 작성 : 이미지 업로드 + 내용 업로드 + 생성.
	void createDiary(DiaryPostDto diaryPostDto) throws Exception;

	// 일기에 이미지 추가
	void addDiaryImg(Long diaryId, MultipartFile imgFile) throws Exception;

	///일기의 이미지 삭제
	void deleteDiaryImage(Long diaryId, String imageUrl) throws Exception;

	// 일기의 내용 업데이트
	void updateDiaryContent(Long diaryId, String content);

	// 일기 삭제
	void deleteDiary(Long diaryId);

	// 월별 일기 기록 조회
	List<LocalDate> findAllDiaryByMonth(LocalDate curDate);
}

