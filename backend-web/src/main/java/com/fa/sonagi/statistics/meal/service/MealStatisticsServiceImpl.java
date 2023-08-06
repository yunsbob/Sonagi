package com.fa.sonagi.statistics.meal.service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
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
import com.fa.sonagi.statistics.meal.dto.MealStatisticsResDto;
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

	/**
	 * 일별 통계 계산
	 */
	@Override
	public MealStatisticsResDto getMealStatisticsDay(Long babyId, LocalDate createdDate) {
		MealStatisticsResDto mealStatisticsResDto = new MealStatisticsResDto();

		// 데이터 조회
		List<MealStatisticsQueryDto> babyFoods = findBabyFoods(babyId, createdDate);
		mealStatisticsResDto.setBabyFoods(babyFoods);
		List<MealStatisticsQueryDto> breastFeedings = findBreastFeedings(babyId, createdDate);
		mealStatisticsResDto.setBreastFeedings(breastFeedings);
		List<SnackFeedingStatisticsQueryDto> feedings = findFeedings(babyId, createdDate);
		mealStatisticsResDto.setFeedings(feedings);
		List<MealStatisticsQueryDto> infantFormulas = findInfantFormulas(babyId, createdDate);
		mealStatisticsResDto.setInfantFormulas(infantFormulas);
		List<MealStatisticsQueryDto> milks = findMilks(babyId, createdDate);
		mealStatisticsResDto.setMilks(milks);
		List<SnackFeedingStatisticsQueryDto> snacks = findSnacks(babyId, createdDate);
		mealStatisticsResDto.setSnacks(snacks);

		// 횟수 통계
		Long cnt = (long)(babyFoods.size() + breastFeedings.size() + feedings.size() + infantFormulas.size() + milks.size() + snacks.size());
		mealStatisticsResDto.setCnt(cnt);

		// 용량 통계
		Long amount = 0L;
		for (int i = 0; i < babyFoods.size(); i++) {
			amount += babyFoods.get(i).getAmount();
		}
		for (int i = 0; i < breastFeedings.size(); i++) {
			amount += breastFeedings.get(i).getAmount();
		}
		for (int i = 0; i < infantFormulas.size(); i++) {
			amount += infantFormulas.get(i).getAmount();
		}
		for (int i = 0; i < milks.size(); i++) {
			amount += milks.get(i).getAmount();
		}
		mealStatisticsResDto.setAmount(amount);

		createdDate = createdDate.minus(1, ChronoUnit.DAYS);

		Long yesterdayCnt = findBabyFoodCnt(babyId, createdDate)
			+ findBreastFeedingCnt(babyId, createdDate)
			+ findFeedingCnt(babyId, createdDate)
			+ findInfantFormulaCnt(babyId, createdDate)
			+ findMilkCnt(babyId, createdDate)
			+ findSnackCnt(babyId, createdDate);

		Long cntPercent, amountPercent, yesterdayCntPercent, yesterdayAmountPercent;

		if (cnt >= yesterdayCnt) {
			if (cnt == 0) cntPercent = 0L;
			else cntPercent = 100L;
			if (yesterdayCnt == 0) yesterdayCntPercent = 0L;
			else yesterdayCntPercent = yesterdayCnt * 100 / cnt;
		}
		else {
			yesterdayCntPercent = 100L;
			if (cnt == 0) cntPercent = 0L;
			else cntPercent = cnt * 100 / yesterdayCnt;
		}
		mealStatisticsResDto.setCntPercent(cntPercent);
		mealStatisticsResDto.setYesterdayCntPercent(yesterdayCntPercent);

		Long yesterdayAmount = findBabyFoodAmount(babyId, createdDate)
			+ findBreastFeedingAmount(babyId, createdDate)
			+ findInfantFormulaAmount(babyId, createdDate)
			+ findMilkAmount(babyId, createdDate);

		if (amount >= yesterdayAmount) {
			if (amount == 0) amountPercent = 0L;
			else amountPercent = 100L;
			if (yesterdayAmount == 0) yesterdayAmountPercent = 0L;
			else yesterdayAmountPercent = yesterdayAmount * 100 / amount;
		}
		else {
			yesterdayAmountPercent = 100L;
			if (cnt == 0) amountPercent = 0L;
			else amountPercent = amount * 100 / yesterdayAmount;
		}
		mealStatisticsResDto.setAmountPercent(amountPercent);
		mealStatisticsResDto.setYesterdayAmountPercent(yesterdayAmountPercent);

		return mealStatisticsResDto;
	}

	/**
	 * 이유식 일별 데이터 조회
	 */
	@Override
	public List<MealStatisticsQueryDto> findBabyFoods(Long babyId, LocalDate createdDate) {
		return babyFoodRepository.findBabyFoodByDay(babyId, createdDate);
	}

	/**
	 * 유축 수유 일별 데이터 조회
	 */
	@Override
	public List<MealStatisticsQueryDto> findBreastFeedings(Long babyId, LocalDate createdDate) {
		return breastFeedingRepository.findBreastFeedingByDay(babyId, createdDate);
	}

	/**
	 * 수유 일별 데이터 조회
	 */
	@Override
	public List<SnackFeedingStatisticsQueryDto> findFeedings(Long babyId, LocalDate createdDate) {
		return feedingRepository.findFeedingByDay(babyId, createdDate);
	}

	/**
	 * 분유 일별 데이터 조회
	 */
	@Override
	public List<MealStatisticsQueryDto> findInfantFormulas(Long babyId, LocalDate createdDate) {
		return infantFormulaRepository.findInfantFormulaByDay(babyId, createdDate);
	}

	/**
	 * 우유 일별 데이터 조회
	 */
	@Override
	public List<MealStatisticsQueryDto> findMilks(Long babyId, LocalDate createdDate) {
		return milkRepository.findMilkByDay(babyId, createdDate);
	}

	/**
	 * 간식 일별 데이터 조회
	 */
	@Override
	public List<SnackFeedingStatisticsQueryDto> findSnacks(Long babyId, LocalDate createdDate) {
		return snackRepository.findSnackByDay(babyId, createdDate);
	}

	/**
	 * 이유식 일별 횟수 조회
	 */
	@Override
	public Long findBabyFoodCnt(Long babyId, LocalDate createdDate) {
		return babyFoodRepository.findBabyFoodCnt(babyId, createdDate);
	}

	/**
	 * 유축 수유 일별 횟수 조회
	 */
	@Override
	public Long findBreastFeedingCnt(Long babyId, LocalDate createdDate) {
		return breastFeedingRepository.findBreastFeedingCnt(babyId, createdDate);
	}

	/**
	 * 수유 일별 횟수 조회
	 */
	@Override
	public Long findFeedingCnt(Long babyId, LocalDate createdDate) {
		return feedingRepository.findFeedingCnt(babyId, createdDate);
	}

	/**
	 * 분유 일별 횟수 조회
	 */
	@Override
	public Long findInfantFormulaCnt(Long babyId, LocalDate createdDate) {
		return infantFormulaRepository.findInfantFormulaCnt(babyId, createdDate);
	}

	/**
	 * 우유 일별 횟수 조회
	 */
	@Override
	public Long findMilkCnt(Long babyId, LocalDate createdDate) {
		return milkRepository.findMilkCnt(babyId, createdDate);
	}

	/**
	 * 간식 일별 횟수 조회
	 */
	@Override
	public Long findSnackCnt(Long babyId, LocalDate createdDate) {
		return snackRepository.findSnackCnt(babyId, createdDate);
	}

	/**
	 * 이유식 일별 용량 조회
	 */
	@Override
	public Long findBabyFoodAmount(Long babyId, LocalDate createdDate) {
		return babyFoodRepository.findBabyFoodAmount(babyId, createdDate);
	}

	/**
	 * 유축 수유 일별 용량 조회
	 */
	@Override
	public Long findBreastFeedingAmount(Long babyId, LocalDate createdDate) {
		return breastFeedingRepository.findBreastFeedingAmount(babyId, createdDate);
	}

	/**
	 * 분유 일별 용량 조회
	 */
	@Override
	public Long findInfantFormulaAmount(Long babyId, LocalDate createdDate) {
		return infantFormulaRepository.findInfantFormulaAmount(babyId, createdDate);
	}

	/**
	 * 우유 일별 용량 조회
	 */
	@Override
	public Long findMilkAmount(Long babyId, LocalDate createdDate) {
		return milkRepository.findMilkAmount(babyId, createdDate);
	}
}
