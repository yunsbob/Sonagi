package com.fa.sonagi.immunization.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VaccinationPutDto {
	@NotNull
	private Long id;

	@NotNull
	private LocalDate vaccinationDate;
}