package com.fa.sonagi.diary.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.diary.entity.Diary;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
	List<Diary> findByBabyIdAndCreatedDateGreaterThanEqualAndCreatedDateLessThanEqual(Long babyId, LocalDate fromDate, LocalDate toDate);
	List<Diary> findByBabyIdAndCreatedDate(Long babyId, LocalDate createdDate);
}