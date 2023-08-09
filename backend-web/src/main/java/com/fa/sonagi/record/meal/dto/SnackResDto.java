package com.fa.sonagi.record.meal.dto;

import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class SnackResDto {
	private Long id;
	private String memo;
	private LocalTime createdTime;
}
