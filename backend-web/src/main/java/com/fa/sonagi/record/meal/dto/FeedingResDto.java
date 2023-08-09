package com.fa.sonagi.record.meal.dto;

import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class FeedingResDto {
	private Long id;
	private LocalTime leftStartTime;
	private LocalTime rightStartTime;
	private LocalTime leftEndTime;
	private LocalTime rightEndTime;
	private String memo;
}
