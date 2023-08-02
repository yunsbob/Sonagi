package com.fa.sonagi.record.diaper.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.record.diaper.entity.Pee;

public interface PeeRepository extends JpaRepository<Pee, Long> {
	List<Pee> findByBabyIdAndCreatedDate(Long babyOd, LocalDate createdDate);
}