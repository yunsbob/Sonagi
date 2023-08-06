package com.fa.sonagi.statistics.activity.controller;

import java.time.LocalDate;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.statistics.activity.dto.ActivityStatisticsResDto;
import com.fa.sonagi.statistics.activity.service.ActivityStatisticsService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "ActivityStatistics", description = "놀이 통계 API")
@RequestMapping("/api/activityStatistics")
@RestController
@RequiredArgsConstructor
public class ActivityStatisticsController {
	private final ActivityStatisticsService activityStatisticsService;

	/**
	 * 취침 통계 조회
	 */
	@GetMapping
	public ResponseEntity<?> getSleepStatistics(@RequestParam Long babyId,
		@RequestParam String period, @RequestParam LocalDate createdDate) {
		if (period.equals("day")) {
			ActivityStatisticsResDto activityStatisticsResDto = activityStatisticsService.getActivityStatisticsDay(babyId, createdDate);
			return ResponseEntity.ok().body(activityStatisticsResDto);
		} else {
			ActivityStatisticsResDto sleepStatisticsResDto = activityStatisticsService.getActivityStatisticsDay(babyId, createdDate);
			return ResponseEntity.ok().body(sleepStatisticsResDto);
		}
	}
}
