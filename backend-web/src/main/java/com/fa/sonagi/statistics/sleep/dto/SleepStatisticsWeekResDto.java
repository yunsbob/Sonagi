package com.fa.sonagi.statistics.sleep.dto;

import java.util.HashMap;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SleepStatisticsWeekResDto {
	private Map<String, SleepStatisticsDayForWeekDto> sleepStatistics;
	private Long sleepCnt;
	private Long allSleepHour;
	private Long allSleepMinute;
	private Long sleepCntPercent;
	private Long lastWeekSleepCntPercent;
	private Long allSleepPercent;
	private Long lastWeekAllSleepPercent;

	public SleepStatisticsWeekResDto() {
		this.sleepStatistics =  new HashMap<>();
	}
}
