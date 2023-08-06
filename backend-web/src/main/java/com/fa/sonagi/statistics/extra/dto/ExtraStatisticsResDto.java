package com.fa.sonagi.statistics.extra.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ExtraStatisticsResDto {
	private List<ExtraStatisticsQueryDto> extras;
	private Long cnt;
	private Long cntPercent;
	private Long yesterdayCntPercent;

	public ExtraStatisticsResDto() {
		this.extras = new ArrayList<>();
	}
}
