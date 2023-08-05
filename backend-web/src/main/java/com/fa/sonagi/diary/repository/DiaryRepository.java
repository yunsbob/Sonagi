package com.fa.sonagi.diary.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.diary.entity.Diary;

public interface DiaryRepository extends JpaRepository<Diary, Long> {

}