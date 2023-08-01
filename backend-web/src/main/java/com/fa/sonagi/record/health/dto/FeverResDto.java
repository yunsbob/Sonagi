package com.fa.sonagi.record.health.dto;

import java.sql.Time;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class FeverResDto {
	private Long id;
	private Time createdTime;
	private Double fever;
	private String memo;
}
