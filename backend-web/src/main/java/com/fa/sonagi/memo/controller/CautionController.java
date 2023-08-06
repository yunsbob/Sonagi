package com.fa.sonagi.memo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.memo.dto.MemoPostDto;
import com.fa.sonagi.memo.dto.MemoPutDto;
import com.fa.sonagi.memo.dto.MemoResDto;
import com.fa.sonagi.memo.service.CautionService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RequestMapping("/api/caution")
@Tag(name = "Illness", description = "주의사항 API")
@RestController
@RequiredArgsConstructor
public class CautionController {
	private final CautionService cautionService;

	/**
	 * 주의사항 메모 리스트 조회
	 */
	@GetMapping("/{babyId}")
	public List<MemoResDto> getCautionMemosByBabyId(@PathVariable Long babyId) {
		return cautionService.findCautionMemosByBabyId(babyId);
	}

	/**
	 * 주의사항 메모 조회
	 */
	@GetMapping("/{babyId}/{cautionId}")
	public ResponseEntity<?> getCaution(@PathVariable Long cautionId) {
		MemoResDto memoResDto = cautionService.findCautionById(cautionId);
		return ResponseEntity.ok().body(memoResDto);
	}

	/**
	 * 주의사항 메모 등록
	 */
	@PostMapping
	public ResponseEntity<?> registCaution(@RequestBody MemoPostDto memoPostDto) {
		cautionService.registCaution(memoPostDto);
		return ResponseEntity.ok().build();
	}

	/**
	 * 주의사항 메모 수정
	 */
	@PutMapping
	public ResponseEntity<?> updateCaution(@RequestBody MemoPutDto memoPutDto) {
		cautionService.updateCaution(memoPutDto);
		return ResponseEntity.ok().build();
	}

	/**
	 * 주의사항 메모 삭제
	 */
	@DeleteMapping("/{cautionId}")
	public ResponseEntity<?> deleteCaution(@PathVariable Long cautionId) {
		cautionService.deleteCaution(cautionId);
		return ResponseEntity.ok().build();
	}
}
