package com.fa.sonagi.baby.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.baby.dto.BabyCodePosDto;
import com.fa.sonagi.baby.dto.BabyCodeResDto;
import com.fa.sonagi.baby.dto.BabyDetailPutDto;
import com.fa.sonagi.baby.dto.BabyDetailResDto;
import com.fa.sonagi.baby.dto.BabyInfoPostDto;
import com.fa.sonagi.baby.dto.BabyInfoResDto;
import com.fa.sonagi.baby.dto.CoparentResDto;
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

	/**
	 * 아기 코드 조회
	 */
	@GetMapping("/babyCode")
	public ResponseEntity<?> getBabyCode(@RequestParam Long babyId) {
		BabyCodeResDto babyCode = babyService.getBabyCode(babyId);
		return ResponseEntity.ok().body(babyCode);
	}

	/**
	 * 아기 코드로 아기 정보 등록
	 */
	@PostMapping("/babyCode")
	public ResponseEntity<?> registBabyByBabyCode(@RequestBody BabyCodePosDto babyCodePosDto) {
		babyService.registUserBabyByCode(babyCodePosDto);
		return ResponseEntity.ok().build();
	}

	/**
	 * 사용자별 아기 리스트(상단바) 조회
	 */
	@GetMapping("/babyInfos/{userId}")
	public List<BabyInfoResDto> getBabyListByUserId(@PathVariable Long userId) {
		return babyService.findBabyListByUserId(userId);
	}

	/**
	 * 아기 상세 정보 조회
	 */
	@GetMapping("/babyDetail/{babyId}")
	public ResponseEntity<?> getBaby(@PathVariable Long babyId) {
		BabyDetailResDto babyDetailResDto = babyService.findBabyDetail(babyId);
		return ResponseEntity.ok().body(babyDetailResDto);
	}

	/**
	 * 아기 상세 정보 수정
	 */
	@PutMapping("/babyDetail")
	public ResponseEntity<?> updateBaby(@RequestBody BabyDetailPutDto babyDetailPutDto) {
		babyService.updateBabyDetail(babyDetailPutDto);
		return ResponseEntity.ok().build();
	}

	/**
	 * 공동 양육자 리스트 조회
	 */
	@GetMapping("/coparents/{babyId}")
	public List<CoparentResDto> getCoparentList(@PathVariable Long babyId) {
		return babyService.findCoparentListByBabyId(babyId);
	}
}
