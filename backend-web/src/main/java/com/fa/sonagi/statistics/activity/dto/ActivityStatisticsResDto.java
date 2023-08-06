package com.fa.sonagi.statistics.activity.dto;

import java.util.ArrayList;
import java.util.List;

import com.fa.sonagi.statistics.activity.service.ActivityStatisticsServiceImpl;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ActivityStatisticsResDto {
	private List<ActivityStatisticsServiceImpl.SnPTime> plays;
	private List<ActivityStatisticsServiceImpl.SnPTime> tummytimes;
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
