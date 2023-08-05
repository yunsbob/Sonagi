package com.fa.sonagi.record.meal.repository;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.meal.dto.FeedingResDto;
import com.fa.sonagi.statistics.meal.dto.SnackFeedingStatisticsQueryDto;

public interface FeedingRepostioryCustom {
	FeedingResDto findFeedingRecord(Long feedingId);

	List<SnackFeedingStatisticsQueryDto> findFeedingByDay(Long babyId, LocalDate createdDate);

	Long findSnackCnt(Long babyId, LocalDate createdDate);
}
