package com.fa.sonagi.statistics.activity.service;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.statistics.activity.dto.ActivityStatisticsQueryDto;
import com.fa.sonagi.statistics.activity.dto.ActivityStatisticsResDto;

public interface ActivityStatisticsService {

	ActivityStatisticsResDto getActivityStatisticsDay(Long babyId, LocalDate createdDate);

	List<ActivityStatisticsQueryDto> findPlays(Long babyId, LocalDate createdDate);

	List<ActivityStatisticsQueryDto> findTummytimes(Long babyId, LocalDate createdDate);
}
