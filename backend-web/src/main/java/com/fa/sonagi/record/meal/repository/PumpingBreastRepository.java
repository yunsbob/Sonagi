package com.fa.sonagi.record.meal.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.record.meal.entity.PumpingBreast;

public interface PumpingBreastRepository extends JpaRepository<PumpingBreast, Long> {

	List<PumpingBreast> findByBabyIdAndCreatedDate(Long babyId, LocalDate createdDate);
}
