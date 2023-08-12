package com.fa.sonagi.faq.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FAQPutDto {
	@NotNull
	private Long FAQId;

	@NotNull
	private String title;

	@NotNull
	private String content;
}
