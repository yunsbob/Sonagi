package com.fa.sonagi.statistics.activity.dto;

import java.util.HashMap;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ActivityStatisticsWeekResDto {
	private Map<String, ActivityStatisticsDayForWeekDto> activityStatistics;
	private Long cnt;
	private Long activityHour;
	private Long activityMinute;
	private Long cntPercent;
	private Long lastWeekCntPercent;
	private Long activityPercent;
	private Long lastWeekActivityPercent;

	public ActivityStatisticsWeekResDto() {
		this.activityStatistics = new HashMap<>();
	}
}
