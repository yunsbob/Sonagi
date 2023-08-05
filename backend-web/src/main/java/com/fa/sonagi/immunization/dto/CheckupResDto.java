package com.fa.sonagi.immunization.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class CheckupResDto {
	private Long id;
	private Long checkupId;
	private String checkupName;
	private LocalDate startDate;
	private LocalDate endDate;
	private LocalDate checkupDate;
	private String content;

}