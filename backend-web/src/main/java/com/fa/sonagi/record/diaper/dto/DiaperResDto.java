package com.fa.sonagi.record.diaper.dto;

import java.sql.Time;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class DiaperResDto {
	private Long id;
	private Time createdTime;
	private String memo;
}
