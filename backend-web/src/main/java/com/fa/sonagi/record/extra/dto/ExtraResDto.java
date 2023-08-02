package com.fa.sonagi.record.extra.dto;

import java.sql.Time;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class ExtraResDto {
	private Long id;
	private Time createdTime;
	private String memo;
}
