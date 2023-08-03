package com.fa.sonagi.record.extra.dto;

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
public class ExtraResDto {
	private Long id;
	private Time createdTime;
	private String memo;
}
