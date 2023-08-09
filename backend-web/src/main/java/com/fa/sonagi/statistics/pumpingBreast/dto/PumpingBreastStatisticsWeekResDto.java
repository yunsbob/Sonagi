package com.fa.sonagi.statistics.pumpingBreast.dto;

import java.util.HashMap;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PumpingBreastStatisticsWeekResDto {
	private Map<String, PumpingBreastStatisticsDayForWeekDto> pumpingBreastStatistics;
	private Long cnt;
	private Long amount;
	private Long cntPercent;
	private Long lastWeekCntPercent;
	private Long amountPercent;
	private Long lastWeekAmountPercent;

	public PumpingBreastStatisticsWeekResDto() {
		this.pumpingBreastStatistics = new HashMap<>();
	}
}
