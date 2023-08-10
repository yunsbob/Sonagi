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
	private Long peeCntPercent;
	private Long yesterdayPeeCntPercent;
	private Long poopCntPercent;
	private Long yesterdayPoopCntPercent;

	public DiaperStatisticsResDto() {
		this.pees = new ArrayList<>();
		this.poops = new ArrayList<>();
	}
}
