package com.fa.sonagi.statistics.meal.service;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.statistics.meal.dto.MealStatisticsQueryDto;
import com.fa.sonagi.statistics.meal.dto.MealStatisticsResDto;
import com.fa.sonagi.statistics.meal.dto.MealStatisticsWeekResDto;
import com.fa.sonagi.statistics.meal.dto.SnackFeedingStatisticsQueryDto;

public interface MealStatisticsService {

	MealStatisticsResDto getMealStatisticsDay(Long babyId, LocalDate createdDate);

	MealStatisticsWeekResDto getMealStatisticsWeek(Long babyId, LocalDate createdDate);
}
