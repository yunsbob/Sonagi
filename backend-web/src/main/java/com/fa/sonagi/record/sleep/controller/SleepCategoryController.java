package com.fa.sonagi.record.sleep.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.sleep.dto.AllSleepResDto;
import com.fa.sonagi.record.sleep.dto.SleepResDto;
import com.fa.sonagi.record.sleep.service.SleepCategoryService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "SleepCategory", description = "수면 카테고리 API")
@RequestMapping("/api/sleepRecords")
@RestController
@RequiredArgsConstructor
public class SleepCategoryController {
	private final SleepCategoryService sleepCategoryService;

	@GetMapping
	public ResponseEntity<?> getSleepRecord(@RequestParam Long babyId, @RequestParam LocalDate createdDate) {
		List<SleepResDto> sleepList = sleepCategoryService.findAllSleep(babyId, createdDate);

		AllSleepResDto allSleepResDto = new AllSleepResDto();
		allSleepResDto.setAllSleepResDto(sleepList);

		return ResponseEntity.ok().body(allSleepResDto);
	}
}
