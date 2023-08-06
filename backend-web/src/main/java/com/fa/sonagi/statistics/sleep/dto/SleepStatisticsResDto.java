package com.fa.sonagi.statistics.sleep.dto;

import java.util.ArrayList;
import java.util.List;

import com.fa.sonagi.statistics.common.StatisticsTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SleepStatisticsResDto {
	private List<StatisticsTime> sleeps;
	private Long sleepCnt;
	private Long allSleepHour;
	private Long allSleepMinute;
	private Long sleepCntPercent;
	private Long yesterdaySleepCntPercent;
	private Long allSleepPercent;
	private Long yesterdayAllSleepPercent;

	public SleepStatisticsResDto() {
		this.sleeps = new ArrayList<>();
	}
}
