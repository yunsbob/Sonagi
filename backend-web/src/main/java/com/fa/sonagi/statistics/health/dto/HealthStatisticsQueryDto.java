package com.fa.sonagi.statistics.health.dto;

import java.time.LocalTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HealthStatisticsQueryDto {
	private LocalTime createdTime;
}
