package com.fa.sonagi.record.activity.dto;

import java.sql.Time;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class ActivityResDto {
	private Long id;
	private Time createdTime;
	private Time endTime;
	private String memo;
}
