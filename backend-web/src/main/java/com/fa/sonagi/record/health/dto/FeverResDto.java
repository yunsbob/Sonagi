package com.fa.sonagi.record.health.dto;

import java.sql.Time;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FeverResDto {
	private Long id;
	private Time createdTime;
	private Double bodyTemperature;
	private String memo;
}
