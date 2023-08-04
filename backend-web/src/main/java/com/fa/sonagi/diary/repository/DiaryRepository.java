package com.fa.sonagi.diary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.web.multipart.MultipartFile;

import com.fa.sonagi.diary.entity.Diary;

public interface DiaryRepository extends JpaRepository<Diary, Long>, JpaSpecificationExecutor<Diary> {

	String updatefile(Long id, MultipartFile profile) throws Exception;

	void deleteProfile(String email) throws Exception;
}