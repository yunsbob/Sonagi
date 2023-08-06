package com.fa.sonagi.record.meal.repository;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.meal.dto.SnackResDto;
import com.fa.sonagi.statistics.meal.dto.SnackFeedingStatisticsQueryDto;

public interface SnackRepositoryCustom {
	SnackResDto findSnackRecord(Long snackId);

	List<SnackFeedingStatisticsQueryDto> findSnackByDay(Long babyId, LocalDate createdDate);

	Long findSnackCnt(Long babyId, LocalDate createdDate);
}
