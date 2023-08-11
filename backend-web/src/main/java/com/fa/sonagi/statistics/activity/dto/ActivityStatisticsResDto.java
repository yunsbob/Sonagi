package com.fa.sonagi.statistics.activity.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ActivityStatisticsResDto {
	private List<ActivityStatisticsQueryDto> plays;
	private List<ActivityStatisticsQueryDto> tummytimes;
	private Long cnt;
	private Long activityHour;
	private Long activityMinute;
	private Long cntPercent;
	private Long yesterdayCntPercent;
	private Long activityPercent;
	private Long yesterdayActivityPercent;

	public ActivityStatisticsResDto() {
		this.plays = new ArrayList<>();
		this.tummytimes = new ArrayList<>();
	}
}
