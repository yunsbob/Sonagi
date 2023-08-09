package com.fa.sonagi.record.meal.dto;

import java.time.LocalTime;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MealPutDto {

	@NotNull
	private Long id;

	@NotNull
	private Long amount;

	private String memo;

	@NotNull
	private LocalTime createdTime;
}
