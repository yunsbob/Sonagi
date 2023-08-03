package com.fa.sonagi.record.sleep.dto;

import java.sql.Time;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class SleepResDto {
	private Long id;
	private Time createdTime;
	private Time endTime;
	private String memo;
}
