package com.fa.sonagi.record.sleep.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.sleep.dto.SleepsPostDto;
import com.fa.sonagi.record.sleep.dto.SleepsPutDto;
import com.fa.sonagi.record.sleep.service.SleepsService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RequestMapping("/api/sleeps")
@Tag(name = "Sleep", description = "수면 API")
@RestController
@RequiredArgsConstructor
public class SleepsController {
	private final SleepsService sleepsService;

	@PostMapping
	public ResponseEntity<?> registSleeps(@RequestBody SleepsPostDto sleepsPostDto) {
		sleepsService.registSleeps(sleepsPostDto);
		return ResponseEntity.ok().build();
	}

	@PutMapping
	public ResponseEntity<?> updateSleeps(@RequestBody SleepsPutDto sleepsPutDto) {
		sleepsService.updateSleeps(sleepsPutDto);
		return ResponseEntity.ok().build();
	}

	@DeleteMapping("/{sleepId}")
	public ResponseEntity<?> deleteSleeps(@PathVariable Long sleepId) {
		sleepsService.deleteSleeps(sleepId);
		return ResponseEntity.ok().build();
	}
}
