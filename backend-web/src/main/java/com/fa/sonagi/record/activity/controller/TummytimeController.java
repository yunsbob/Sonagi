package com.fa.sonagi.record.activity.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.activity.dto.ActivityPostDto;
import com.fa.sonagi.record.activity.dto.ActivityPutDto;
import com.fa.sonagi.record.activity.service.TummytimeService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Tummytime", description = "터미타임 API")
@RequestMapping("/api/tummytimes")
@RestController
@RequiredArgsConstructor
public class TummytimeController {

  private final TummytimeService tummytimeService;

  @PostMapping
  public ResponseEntity<?> registTummytime(@RequestBody ActivityPostDto activityPostDto) {
    tummytimeService.registTummytime(activityPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updateTummytime(@RequestBody ActivityPutDto activityPutDto) {
    tummytimeService.updateTummytime(activityPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{tummytimeId}")
  public ResponseEntity<?> deleteTummytime(@PathVariable Long tummytimeId) {
    tummytimeService.deleteTummytime(tummytimeId);
    return ResponseEntity.ok().build();
  }
}
