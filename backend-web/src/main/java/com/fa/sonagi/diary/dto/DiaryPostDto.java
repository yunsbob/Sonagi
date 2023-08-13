package com.fa.sonagi.diary.dto;

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

	private String content;
}
