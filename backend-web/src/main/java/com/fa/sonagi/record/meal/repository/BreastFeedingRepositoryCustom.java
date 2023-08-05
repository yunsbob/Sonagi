package com.fa.sonagi.record.meal.repository;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.meal.dto.MealResDto;
import com.fa.sonagi.statistics.meal.dto.MealStatisticsQueryDto;

public interface BreastFeedingRepositoryCustom {
	MealResDto findBreastFeedingRecord(Long breastFeedingId);

	List<MealStatisticsQueryDto> findBreastFeedingByDay(Long babyId, LocalDate createdDate);

	Long findBreastFeedingCnt(Long babyId, LocalDate createdDate);
}
