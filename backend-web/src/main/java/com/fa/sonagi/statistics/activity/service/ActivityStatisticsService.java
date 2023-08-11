package com.fa.sonagi.statistics.activity.service;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.statistics.activity.dto.ActivityStatisticsQueryDto;
import com.fa.sonagi.statistics.activity.dto.ActivityStatisticsResDto;
import com.fa.sonagi.statistics.activity.dto.ActivityStatisticsWeekResDto;

public interface ActivityStatisticsService {

	ActivityStatisticsResDto getActivityStatisticsDay(Long babyId, LocalDate createdDate);

	ActivityStatisticsWeekResDto getActivityStatisticsWeek(Long babyId, LocalDate createdDate);
}
