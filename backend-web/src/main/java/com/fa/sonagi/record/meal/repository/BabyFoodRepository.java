package com.fa.sonagi.record.meal.repository;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.meal.dto.MealResDto;
import com.fa.sonagi.record.meal.entity.BabyFood;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BabyFoodRepository extends JpaRepository<BabyFood, Long>, BabyFoodRepositoryCustom{
	List<MealResDto> findByBabyIdAndCreatedDate(Long babyId, LocalDate createdDate);
}
