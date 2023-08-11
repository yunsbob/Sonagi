package com.fa.sonagi.statistics.activity.dto;

import java.time.LocalTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ActivityStatisticsQueryDto {
	private LocalTime createdTime;
	private LocalTime endTime;
}
