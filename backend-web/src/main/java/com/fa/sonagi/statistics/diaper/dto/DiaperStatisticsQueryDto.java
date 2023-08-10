package com.fa.sonagi.statistics.diaper.dto;

import java.time.LocalTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DiaperStatisticsQueryDto {
	private LocalTime createdTime;
}
