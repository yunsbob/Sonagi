package com.fa.sonagi.diary.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DiaryPostDto {

	@NotNull
	private Long userId;

	@NotNull
	private Long babyId;

	@NotNull
	private LocalDate writeDay;

	private String content;

	@NotNull
	private LocalTime createAt;
}
