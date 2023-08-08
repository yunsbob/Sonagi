package com.fa.sonagi.statistics.health.dto;

import java.util.HashMap;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HealthStatisticsWeekResDto {
	private Map<String, HealthStatisticsDayForWeekDto> healthStatistics;
	private Double feverAvg;
	private Long hospitalCnt;
	private Long medicationCnt;
	private Long feverAvgPercent;
	private Long lastWeekFeverAvgPercent;
	private Long hospitalCntPercent;
	private Long lastWeekHospitalCntPercent;
	private Long medicationCntPercent;
	private Long lastWeekMedicationCntPercent;

	public HealthStatisticsWeekResDto() {
		this.healthStatistics = new HashMap<>();
	}
}
