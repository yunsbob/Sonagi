package com.fa.sonagi.user.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.user.dto.NameDto;
import com.fa.sonagi.user.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "User", description = "사용자 API")
@RequestMapping("/api")
@RestController
@RequiredArgsConstructor
public class UserController {
	private final UserService userService;

	/**
	 * 사용자 이름 조회
	 */
	@GetMapping("/name/{userId}")
	public ResponseEntity<?> getName(@PathVariable Long userId) {
		NameDto nameDto = userService.findName(userId);
		return ResponseEntity.ok().body(nameDto);
	}

	/**
	 * 사용자 이름 등록, 수정
	 */
	@PutMapping("/name")
	public ResponseEntity<?> updateName(@RequestBody NameDto nameDto) {
		userService.updateName(nameDto);
		return ResponseEntity.ok().build();
	}
}
