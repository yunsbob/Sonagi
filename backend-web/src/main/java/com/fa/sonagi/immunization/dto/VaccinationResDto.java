package com.fa.sonagi.immunization.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class VaccinationResDto {
	private Long vaccinationStatusId;
	private Long vaccinationId;
	private String disease;
	private String vaccineName;
	private LocalDate startDate;
	private LocalDate endDate;
	private LocalDate vaccinationDate;
	private String content;
}