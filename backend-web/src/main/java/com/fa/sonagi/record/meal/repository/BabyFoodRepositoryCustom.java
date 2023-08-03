package com.fa.sonagi.record.meal.repository;

import java.time.LocalDate;

import com.fa.sonagi.record.meal.dto.MealResDto;

public interface BabyFoodRepositoryCustom{
	MealResDto findBabyFoodDetailRecord(Long babyFoodId);
}
