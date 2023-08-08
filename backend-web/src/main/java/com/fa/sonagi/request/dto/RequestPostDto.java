package com.fa.sonagi.request.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestPostDto {
	@NotNull
	private Long userId;

	@NotNull
	private String title;

	@NotNull
	private String content;

	@NotNull
	private LocalDate createdAt;

}
