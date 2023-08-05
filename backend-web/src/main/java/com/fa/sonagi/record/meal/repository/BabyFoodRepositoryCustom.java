package com.fa.sonagi.record.meal.repository;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.meal.dto.MealResDto;
import com.fa.sonagi.statistics.meal.dto.MealStatisticsQueryDto;

public interface BabyFoodRepositoryCustom{
	MealResDto findBabyFoodRecord(Long babyFoodId);

	List<MealStatisticsQueryDto> findBabyFoodByDay(Long babyId, LocalDate createdDate);

	Long findBabyFoodCnt(Long babyId, LocalDate createdDate);
}
