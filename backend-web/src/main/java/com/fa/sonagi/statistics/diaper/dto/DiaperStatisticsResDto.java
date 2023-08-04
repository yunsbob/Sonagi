package com.fa.sonagi.statistics.diaper.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DiaperStatisticsResDto {
	private List<DiaperStatisticsQueryDto> pees;
	private List<DiaperStatisticsQueryDto> poops;
	private Integer peeCnt;
	private Integer poopCnt;
	private Integer peePercent;
	private Integer yesterdayPeePercent;
	private Integer poopPercent;
	private Integer yesterdayPoopPercent;

	public DiaperStatisticsResDto() {
		this.pees = new ArrayList<>();
		this.poops = new ArrayList<>();
	}
}
