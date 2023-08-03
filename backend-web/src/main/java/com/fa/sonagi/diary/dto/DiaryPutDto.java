package com.fa.sonagi.diary.dto;

import java.time.LocalDate;

import org.joda.time.DateTime;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DiaryPutDto {
	@NotNull
	private Long diaryId;

	@NotNull
	private LocalDate writeDay;

	private String content;

	@NotNull
	private DateTime createAt;
}
