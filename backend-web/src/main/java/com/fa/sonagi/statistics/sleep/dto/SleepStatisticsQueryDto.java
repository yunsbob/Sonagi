package com.fa.sonagi.statistics.sleep.dto;

import java.sql.Time;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SleepStatisticsQueryDto {
	private Time createdTime;
	private Time endTime;
}
