package com.fa.sonagi.request.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.request.dto.RequestPostDto;
import com.fa.sonagi.request.dto.RequestResDto;
import com.fa.sonagi.request.service.RequestService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RequestMapping("/api/requests")
@Tag(name = "Request", description = "문의사항 API")
@RestController
@RequiredArgsConstructor
public class RequestController {
	private final RequestService requestService;

	/**
	 * 문의사항 조회
	 */
	@GetMapping("/{requestId}")
	public RequestResDto findRequest(@PathVariable Long requestId) {
		return requestService.findRequestById(requestId);
	}

	/**
	 * 문의사항 등록
	 */
	@PostMapping
	public ResponseEntity<?> registRequest(@RequestBody RequestPostDto requestPostDto) {
		requestService.registRequest(requestPostDto);
		return ResponseEntity.ok().build();
	}
}
