package com.fa.sonagi.record.meal.repository;

import com.fa.sonagi.record.meal.dto.MealResDto;

public interface BabyFoodRepositoryCustom{
	MealResDto findBabyFoodDetailRecord(Long babyFoodId);
}
