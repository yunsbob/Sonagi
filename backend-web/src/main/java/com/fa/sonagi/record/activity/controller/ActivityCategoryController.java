package com.fa.sonagi.record.activity.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.activity.dto.ActivityResDto;
import com.fa.sonagi.record.activity.dto.AllActivityResDto;
import com.fa.sonagi.record.activity.service.ActivityCategoryService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "ActivityCategory", description = "놀이 카테고리 API")
@RequestMapping("/api/activityRecords")
@RestController
@RequiredArgsConstructor
public class ActivityCategoryController {

	private final ActivityCategoryService activityCategoryService;

	/**
	 * 놀이 카테고리 조회
	 */
	@GetMapping
	public ResponseEntity<?> getActivityRecord(@RequestParam Long babyId, @RequestParam LocalDate createdDate) {
		List<ActivityResDto> playList = activityCategoryService.findAllPlay(babyId, createdDate);
		List<ActivityResDto> tummytimeList = activityCategoryService.findAllTummytime(babyId, createdDate);

		AllActivityResDto allActivityResDto = new AllActivityResDto();
		allActivityResDto.setAllActivityResDto(playList, tummytimeList);

		return ResponseEntity.ok().body(allActivityResDto);
	}
}
