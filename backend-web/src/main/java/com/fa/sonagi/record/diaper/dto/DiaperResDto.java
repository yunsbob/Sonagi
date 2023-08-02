package com.fa.sonagi.record.diaper.dto;

import java.sql.Time;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class DiaperResDto {
	private Long id;
	private Time createdTime;
	private String memo;
}
