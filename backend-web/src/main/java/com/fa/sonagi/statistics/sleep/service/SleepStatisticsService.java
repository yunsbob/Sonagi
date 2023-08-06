package com.fa.sonagi.statistics.sleep.service;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.statistics.sleep.dto.SleepStatisticsQueryDto;
import com.fa.sonagi.statistics.sleep.dto.SleepStatisticsResDto;

public interface SleepStatisticsService {

	SleepStatisticsResDto getSleepStatisticsDay(Long babyId, LocalDate createdDate);

	List<SleepStatisticsQueryDto> findSleeps(Long babyId, LocalDate createdDate);
}
