package com.fa.sonagi.statistics.sleep.dto;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SleepStatisticsWeekResDto {
	private Map<String, List<SleepStatisticsDayForWeekDto>> sleepStatistics;
	private Long sleepCnt;
	private Long allSleepHour;
	private Long allSleepMinute;
	private Long sleepCntPercent;
	private Long yesterdaySleepCntPercent;
	private Long allSleepPercent;
	private Long yesterdayAllSleepPercent;

	public SleepStatisticsWeekResDto() {
		this.sleepStatistics =  new HashMap<>();
	}
}
