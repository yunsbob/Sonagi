package com.fa.sonagi.statistics.sleep.dto;

import java.util.HashMap;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SleepStatisticsWeekResDto {
	private Map<String, SleepStatisticsDayForWeekDto> sleepStatistics;
	private Long cnt;
	private Long sleepHour;
	private Long sleepMinute;
	private Long cntPercent;
	private Long lastWeekCntPercent;
	private Long sleepPercent;
	private Long lastWeekSleepPercent;

	public SleepStatisticsWeekResDto() {
		this.sleepStatistics =  new HashMap<>();
	}
}
