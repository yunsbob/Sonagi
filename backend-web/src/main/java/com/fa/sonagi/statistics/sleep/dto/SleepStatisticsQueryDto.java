package com.fa.sonagi.statistics.sleep.dto;

import java.time.LocalTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SleepStatisticsQueryDto {
	private LocalTime createdTime;
	private LocalTime endTime;
}
