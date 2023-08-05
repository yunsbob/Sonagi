package com.fa.sonagi.statistics.sleep.service;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.statistics.sleep.dto.SleepStatisticsQueryDto;

public interface SleepStatisticsService {

	void getSleepStatisticsDay(Long babyId, LocalDate createdDate);

	List<SleepStatisticsQueryDto> findSleeps(Long babyId, LocalDate createdDate);
}
