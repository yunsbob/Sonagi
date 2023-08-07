package com.fa.sonagi.statistics.health.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HealthStatisticsResDto {
	private List<HealthStatisticsQueryDto> hospitals;
	private List<HealthStatisticsQueryDto> medications;
	private Double feverAvg;
	private Long hospitalCnt;
	private Long medicationCnt;
	private Long feverAvgPercent;
	private Long hospitalCntPercent;
	private Long medicationCntPercent;
	private Long yesterdayFeverAvgPercent;
	private Long yesterdayHospitalCntPercent;
	private Long yesterdayMedicationCntPercent;

	public HealthStatisticsResDto() {
		this.hospitals = new ArrayList<>();
		this.medications = new ArrayList<>();
	}
}
