package com.fa.sonagi.diary.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fa.sonagi.diary.dto.DiaryPostDto;
import com.fa.sonagi.diary.dto.DiaryPutDto;
import com.fa.sonagi.diary.dto.DiaryResDto;
import com.fa.sonagi.diary.service.DiaryService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/diaries")
@Tag(name = "Diary", description = "일기 CRUD API")
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class DiaryController {

	private final DiaryService diaryService;

	@GetMapping
	@Operation(summary = "일별 아기의 일기 데이터 조회")
	public ResponseEntity<?> getDiaries(@RequestParam Long babyId,
		@RequestParam LocalDate writeDay) throws Exception {
		DiaryResDto.DiaryInfos diaryInfos = diaryService.selectAllByBabyIdAndWriteDay(babyId, writeDay);

		return ResponseEntity
			.ok()
			.body(diaryInfos);
	}

	@PostMapping
	@Operation(summary = "일기 등록")
	public ResponseEntity<?> registDiaries(
		@RequestPart DiaryPostDto diaryPostDto, @RequestPart List<MultipartFile> imgFiles) throws Exception {
		diaryService.createDiary(diaryPostDto, imgFiles);
		return ResponseEntity
			.ok()
			.build();
	}

	@PutMapping
	@Operation(summary = "일기 내용, 사진 데이터 수정")
	public ResponseEntity<?> updateDiaries(@RequestPart DiaryPutDto diaryPutDto, @RequestPart List<MultipartFile> imgFiles) throws Exception {
		diaryService.updateDiaryContent(diaryPutDto, imgFiles);
		return ResponseEntity
			.ok()
			.build();
	}

	@DeleteMapping("/{diaryId}")
	@Operation(summary = "일기 삭제")
	public ResponseEntity<?> deleteDiary(@PathVariable Long diaryId) {
		diaryService.deleteDiary(diaryId);
		return ResponseEntity
			.ok()
			.build();
	}

	@GetMapping("/dates")
	@Operation(summary = "월별 일기 기록 여부 날짜 리스트 조회")
	public ResponseEntity<?> getDateListByDateInMonth(
		@Parameter(description = "연도와 월이 포함된 날짜 ex- 2018년 9월에 일기 작성된 날짜 리스트를 받고 싶다 -2018년 9월이 포함된 아무 날짜", required = true)
		@RequestParam LocalDate localDate,
		@Parameter(description = "아기 Id", required = true)
		@RequestParam Long babyId
	) throws Exception {
		return ResponseEntity
			.ok()
			.body(new DiaryResDto.DateInfos(diaryService.findAllDiaryByMonth(localDate, babyId)));
	}

}
