package com.fa.sonagi.statistics.meal.service;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.statistics.meal.dto.MealStatisticsQueryDto;
import com.fa.sonagi.statistics.meal.dto.MealStatisticsResDto;
import com.fa.sonagi.statistics.meal.dto.SnackFeedingStatisticsQueryDto;

public interface MealStatisticsService {

	MealStatisticsResDto getMealStatisticsDay(Long babyId, LocalDate createdDate);

	List<MealStatisticsQueryDto> findBabyFoods(Long babyId, LocalDate createdDate);

	List<MealStatisticsQueryDto> findBreastFeedings(Long babyId, LocalDate createdDate);

	List<SnackFeedingStatisticsQueryDto> findFeedings(Long babyId, LocalDate createdDate);

	List<MealStatisticsQueryDto> findInfantFormulas(Long babyId, LocalDate createdDate);

	List<MealStatisticsQueryDto> findMilks(Long babyId, LocalDate createdDate);

	List<SnackFeedingStatisticsQueryDto> findSnacks(Long babyId, LocalDate createdDate);

	Long findBabyFoodCnt(Long babyId, LocalDate createdDate);

	Long findBreastFeedingCnt(Long babyId, LocalDate createdDate);

	Long findFeedingCnt(Long babyId, LocalDate createdDate);

	Long findInfantFormulaCnt(Long babyId, LocalDate createdDate);

	Long findMilkCnt(Long babyId, LocalDate createdDate);

	Long findSnackCnt(Long babyId, LocalDate createdDate);

	Long findBabyFoodAmount(Long babyId, LocalDate createdDate);

	Long findBreastFeedingAmount(Long babyId, LocalDate createdDate);

	Long findInfantFormulaAmount(Long babyId, LocalDate createdDate);

	Long findMilkAmount(Long babyId, LocalDate createdDate);
}
