package com.fa.sonagi.baby.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.baby.dto.BabyInfoPostDto;
import com.fa.sonagi.baby.service.BabyService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "BabyInfo", description = "아기 정보 API")
@RequestMapping("/api")
@RestController
@RequiredArgsConstructor
public class BabyController {

	private final BabyService babyService;

	/**
	 * 아기 정보 생성
	 */
	@PostMapping("/babyInfos")
	public ResponseEntity<?> registBaby(@RequestBody BabyInfoPostDto babyInfoPostDto) {
		babyService.registBabyInfo(babyInfoPostDto);
		return ResponseEntity.ok().build();
	}
}
