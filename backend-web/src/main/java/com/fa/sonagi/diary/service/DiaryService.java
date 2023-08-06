package com.fa.sonagi.diary.service;

import org.springframework.web.multipart.MultipartFile;

public interface DiaryService {

	void addDiaryImage(String diaryId, MultipartFile image) throws Exception;

	void deleteDiaryImage(String diaryId, String ImageUrl) throws Exception;

}
