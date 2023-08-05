package com.fa.sonagi.statistics.meal.service;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.statistics.meal.dto.MealStatisticsQueryDto;
import com.fa.sonagi.statistics.meal.dto.SnackFeedingStatisticsQueryDto;

public interface MealStatisticsService {

	List<MealStatisticsQueryDto> findBabyFoods(Long babyId, LocalDate createdDate);

	List<MealStatisticsQueryDto> findBreastFeedings(Long babyId, LocalDate createdDate);

	List<SnackFeedingStatisticsQueryDto> findFeedings(Long babyId, LocalDate createdDate);

	List<MealStatisticsQueryDto> findInfantFormulas(Long babyId, LocalDate createdDate);

	List<MealStatisticsQueryDto> findMilks(Long babyId, LocalDate createdDate);

	List<SnackFeedingStatisticsQueryDto> findSnacks(Long babyId, LocalDate createdDate);
}
