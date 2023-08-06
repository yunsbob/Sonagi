package com.fa.sonagi.statistics.activity.dto;

import java.sql.Time;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ActivityStatisticsQueryDto {
	private Time createdTime;
	private Time endTime;
}
