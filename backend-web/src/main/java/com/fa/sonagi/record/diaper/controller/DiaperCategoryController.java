package com.fa.sonagi.record.diaper.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.diaper.dto.AllDiaperResDto;
import com.fa.sonagi.record.diaper.dto.DiaperResDto;
import com.fa.sonagi.record.diaper.service.DiaperCategoryService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "ActivityCategory", description = "놀이 카테고리 API")
@RequestMapping("/api/diaperRecords")
@RestController
@RequiredArgsConstructor
public class DiaperCategoryController {
	private final DiaperCategoryService diaperCategoryService;

	/**
	 * 기저귀 카테고리 조회
	 */
	@GetMapping
	public ResponseEntity<?> getDiaperRecord(@RequestParam Long babyId, @RequestParam LocalDate createdDate) {
		List<DiaperResDto> peeList = diaperCategoryService.findAllPee(babyId, createdDate);
		List<DiaperResDto> poopList = diaperCategoryService.findAllPoop(babyId, createdDate);

		AllDiaperResDto allDiaperResDto = new AllDiaperResDto();
		allDiaperResDto.setAllDiaperResDto(peeList, poopList);

		return ResponseEntity.ok().body(allDiaperResDto);
	}
}
