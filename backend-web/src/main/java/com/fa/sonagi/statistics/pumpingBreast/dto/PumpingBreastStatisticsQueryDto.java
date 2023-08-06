package com.fa.sonagi.statistics.pumpingBreast.dto;

import java.sql.Time;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PumpingBreastStatisticsQueryDto {
	private Time createdTime;
	private Long amount;
}
