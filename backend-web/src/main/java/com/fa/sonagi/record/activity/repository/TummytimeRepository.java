package com.fa.sonagi.record.activity.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.record.activity.entity.Tummytime;

public interface TummytimeRepository extends JpaRepository<Tummytime, Long> {
	List<Tummytime> findByBabyIdAndCreatedDate(Long babyId, LocalDate createdDate);
}
