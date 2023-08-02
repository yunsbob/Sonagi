package com.fa.sonagi.record.health.dto;

import java.sql.Time;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class HealthResDto {
	private Long id;
	private Time createdTime;
	private String memo;
}
