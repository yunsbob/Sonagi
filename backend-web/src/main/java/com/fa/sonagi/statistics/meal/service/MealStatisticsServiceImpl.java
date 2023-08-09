package com.fa.sonagi.statistics.meal.service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalAdjusters;
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
import com.fa.sonagi.statistics.meal.dto.MealStatisticsWeekResDto;
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
		List<MealStatisticsQueryDto> babyFoods = babyFoodRepository.findBabyFoodByDay(babyId, createdDate);
		mealStatisticsResDto.setBabyFoods(babyFoods);
		List<MealStatisticsQueryDto> breastFeedings = breastFeedingRepository.findBreastFeedingByDay(babyId, createdDate);
		mealStatisticsResDto.setBreastFeedings(breastFeedings);
		List<SnackFeedingStatisticsQueryDto> feedings = feedingRepository.findFeedingByDay(babyId, createdDate);
		mealStatisticsResDto.setFeedings(feedings);
		List<MealStatisticsQueryDto> infantFormulas = infantFormulaRepository.findInfantFormulaByDay(babyId, createdDate);
		mealStatisticsResDto.setInfantFormulas(infantFormulas);
		List<MealStatisticsQueryDto> milks = milkRepository.findMilkByDay(babyId, createdDate);
		mealStatisticsResDto.setMilks(milks);
		List<SnackFeedingStatisticsQueryDto> snacks = snackRepository.findSnackByDay(babyId, createdDate);
		mealStatisticsResDto.setSnacks(snacks);

		// 횟수 통계
		Long cnt = (long)(babyFoods.size() + breastFeedings.size() + feedings.size() + infantFormulas.size() + milks.size() + snacks.size());
		mealStatisticsResDto.setCnt(cnt);

		// 용량 통계
		Long amount = 0L;
		amount += sumAmount(babyFoods);
		amount += sumAmount(breastFeedings);
		amount += sumAmount(infantFormulas);
		amount += sumAmount(milks);
		mealStatisticsResDto.setAmount(amount);

		createdDate = createdDate.minus(1, ChronoUnit.DAYS);

		Long yesterdayCnt = babyFoodRepository.findBabyFoodCnt(babyId, createdDate)
			+ breastFeedingRepository.findBreastFeedingCnt(babyId, createdDate)
			+ feedingRepository.findFeedingCnt(babyId, createdDate)
			+ infantFormulaRepository.findInfantFormulaCnt(babyId, createdDate)
			+ milkRepository.findMilkCnt(babyId, createdDate)
			+ snackRepository.findSnackCnt(babyId, createdDate);

		Long cntPercent = getPercent(cnt, yesterdayCnt);
		Long yesterdayCntPercent = getPercent(yesterdayCnt, cnt);
		mealStatisticsResDto.setCntPercent(cntPercent);
		mealStatisticsResDto.setYesterdayCntPercent(yesterdayCntPercent);

		Long yesterdayAmount = babyFoodRepository.findBabyFoodAmount(babyId, createdDate)
			+ breastFeedingRepository.findBreastFeedingAmount(babyId, createdDate)
			+ infantFormulaRepository.findInfantFormulaAmount(babyId, createdDate)
			+ milkRepository.findMilkAmount(babyId, createdDate);

		Long amountPercent = getPercent(amount, yesterdayAmount);
		Long yesterdayAmountPercent = getPercent(yesterdayAmount, amount);
		mealStatisticsResDto.setAmountPercent(amountPercent);
		mealStatisticsResDto.setYesterdayAmountPercent(yesterdayAmountPercent);

		return mealStatisticsResDto;
	}

	@Override
	public MealStatisticsWeekResDto getMealStatisticsWeek(Long babyId, LocalDate createdDate) {
		LocalDate monday = createdDate.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY));
		LocalDate sunday = createdDate.with(TemporalAdjusters.nextOrSame(DayOfWeek.SUNDAY));
		MealStatisticsWeekResDto mealWeek = new MealStatisticsWeekResDto();

		return null;
	}

	/**
	 * 퍼센트 계산하기 Long
	 */
	public Long getPercent(Long target, Long opponent) {
		if (target == 0) return 0L;
		else if (target >= opponent) {
			return 100L;
		}
		else {
			return target * 100 / opponent;
		}
	}

	/**
	 * 총 용량 계산하기
	 */
	public Long sumAmount(List<MealStatisticsQueryDto> amounts) {
		Long amount = 0L;
		for (int i = 0; i < amounts.size(); i++) {
			amount += amounts.get(i).getAmount();
		}

		return amount;
	}
}
