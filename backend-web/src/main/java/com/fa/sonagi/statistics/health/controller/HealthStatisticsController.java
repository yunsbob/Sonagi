package com.fa.sonagi.statistics.health.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.statistics.health.service.HealthStatisticsService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "HealthStatistics", description = "건강 통계 API")
@RequestMapping("/api/healthStatistics")
@RestController
@RequiredArgsConstructor
public class HealthStatisticsController {
	private final HealthStatisticsService healthStatisticsService;

}
