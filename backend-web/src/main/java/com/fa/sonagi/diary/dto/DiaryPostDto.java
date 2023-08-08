package com.fa.sonagi.diary.dto;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

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

	private List<MultipartFile> imgFiles;

	private String content;

	@NotNull
	private LocalDate createdDate;
}
