package com.fa.sonagi.request.dto;

import java.time.LocalDate;

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
public class RequestResDto {
	private Long id;
	private LocalDate createdAt;
	private String title;
	private String content;
	private Long userId;
}
