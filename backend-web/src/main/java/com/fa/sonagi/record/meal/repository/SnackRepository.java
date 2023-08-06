package com.fa.sonagi.record.meal.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.record.meal.entity.Snack;

public interface SnackRepository extends JpaRepository<Snack, Long>, SnackRepositoryCustom {

	List<Snack> findByBabyIdAndCreatedDate(Long babyId, LocalDate createdDate);
}
