package com.fa.sonagi.statistics.diaper.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DiaperStatisticsResDto {
	private List<DiaperStatisticsQueryDto> pees;
	private List<DiaperStatisticsQueryDto> poops;
	private Long peeCnt;
	private Long poopCnt;
	private Long peePercent;
	private Long yesterdayPeePercent;
	private Long poopPercent;
	private Long yesterdayPoopPercent;

	public DiaperStatisticsResDto() {
		this.pees = new ArrayList<>();
		this.poops = new ArrayList<>();
	}
}
