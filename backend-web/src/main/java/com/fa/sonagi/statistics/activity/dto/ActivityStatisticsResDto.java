package com.fa.sonagi.statistics.activity.dto;

import java.util.ArrayList;
import java.util.List;

import com.fa.sonagi.statistics.common.StatisticsTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ActivityStatisticsResDto {
	private List<StatisticsTime> plays;
	private List<StatisticsTime> tummytimes;
	private Long activityCnt;
	private Long activityHour;
	private Long activityMinute;
	private Long activityCntPercent;
	private Long yesterdayActivityCntPercent;
	private Long allActivityPercent;
	private Long yesterdayAllActivityPercent;

	public ActivityStatisticsResDto() {
		this.plays = new ArrayList<>();
		this.tummytimes = new ArrayList<>();
	}
}
