package com.fa.sonagi.diary.dto;

import java.time.LocalDate;
import java.util.List;

import org.joda.time.DateTime;
import org.springframework.web.multipart.MultipartFile;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DiaryPutDto {
	@NotNull
	private Long diaryId;

	private String content;

	private List<String> removeFiles;
}
