package com.fa.sonagi.statistics.sleep.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SleepStatisticsResDto {
	private List<SleepStatisticsQueryDto> sleeps;
	private Long cnt;
	private Long sleepHour;
	private Long sleepMinute;
	private Long cntPercent;
	private Long yesterdayCntPercent;
	private Long sleepPercent;
	private Long yesterdaySleepPercent;

	public SleepStatisticsResDto() {
		this.sleeps = new ArrayList<>();
	}
}
