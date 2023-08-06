package com.fa.sonagi.statistics.meal.controller;

import java.time.LocalDate;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.statistics.meal.dto.MealStatisticsResDto;
import com.fa.sonagi.statistics.meal.service.MealStatisticsService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "MealCategory", description = "식사 통계 API")
@RequestMapping("/api/mealStatistics")
@RestController
@RequiredArgsConstructor
public class MealStatisticsController {
	private final MealStatisticsService mealStatisticsService;

	/**
	 * 식사 통계 조회
	 */
	@GetMapping
	public ResponseEntity<?> getMealStatistics(@RequestParam Long babyId,
		@RequestParam String period, @RequestParam LocalDate createdDate) {
		if (period.equals("day")) {
			MealStatisticsResDto mealStatisticsResDto = mealStatisticsService.getMealStatisticsDay(babyId, createdDate);
			return ResponseEntity.ok().body(mealStatisticsResDto);
		}
		else {
			MealStatisticsResDto mealStatisticsResDto = mealStatisticsService.getMealStatisticsDay(babyId, createdDate);
			return ResponseEntity.ok().body(mealStatisticsResDto);
		}
	}
}
