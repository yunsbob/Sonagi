package com.fa.sonagi.statistics.meal.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.meal.repository.BabyFoodRepository;
import com.fa.sonagi.record.meal.repository.BreastFeedingRepository;
import com.fa.sonagi.record.meal.repository.FeedingRepository;
import com.fa.sonagi.record.meal.repository.InfantFormulaRepository;
import com.fa.sonagi.record.meal.repository.MilkRepository;
import com.fa.sonagi.record.meal.repository.SnackRepository;
import com.fa.sonagi.statistics.meal.dto.MealStatisticsQueryDto;
import com.fa.sonagi.statistics.meal.dto.SnackFeedingStatisticsQueryDto;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MealStatisticsServiceImpl implements MealStatisticsService{

	private final BabyFoodRepository babyFoodRepository;
	private final BreastFeedingRepository breastFeedingRepository;
	private final FeedingRepository feedingRepository;
	private final InfantFormulaRepository infantFormulaRepository;
	private final MilkRepository milkRepository;
	private final SnackRepository snackRepository;

	@Override
	public List<MealStatisticsQueryDto> findBabyFoods(Long babyId, LocalDate createdDate) {
		return babyFoodRepository.findBabyFoodByDay(babyId, createdDate);
	}

	@Override
	public List<MealStatisticsQueryDto> findBreastFeedings(Long babyId, LocalDate createdDate) {
		return breastFeedingRepository.findBreastFeedingByDay(babyId, createdDate);
	}

	@Override
	public List<SnackFeedingStatisticsQueryDto> findFeedings(Long babyId, LocalDate createdDate) {
		return feedingRepository.findFeedingByDay(babyId, createdDate);
	}

	@Override
	public List<MealStatisticsQueryDto> findInfantFormulas(Long babyId, LocalDate createdDate) {
		return infantFormulaRepository.findInfantFormulaByDay(babyId, createdDate);
	}

	@Override
	public List<MealStatisticsQueryDto> findMilks(Long babyId, LocalDate createdDate) {
		return milkRepository.findMilkByDay(babyId, createdDate);
	}

	@Override
	public List<SnackFeedingStatisticsQueryDto> findSnacks(Long babyId, LocalDate createdDate) {
		return snackRepository.findSnackByDay(babyId, createdDate);
	}
}
