package com.fa.sonagi.record.meal.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.meal.dto.FeedingPostDto;
import com.fa.sonagi.record.meal.dto.FeedingPutDto;
import com.fa.sonagi.record.meal.service.FeedingsService;

import lombok.RequiredArgsConstructor;

@RequestMapping("/api/feedings")
@RestController
@RequiredArgsConstructor
public class FeedingsController {

  private final FeedingsService feedingsService;

  /**
   * 수유 기록 등록
   */
  @PostMapping
  public ResponseEntity<?> registBreastFeeding(@RequestBody FeedingPostDto feedingPostDto) {
    feedingsService.registFeeding(feedingPostDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 수유 기록 수정
   */
  @PutMapping
  public ResponseEntity<?> updateFeeding(@RequestBody FeedingPutDto feedingPutDto) {
    feedingsService.updateFeeding(feedingPutDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 수유 기록 삭제
   */
  @DeleteMapping("/{feedingId}")
  public ResponseEntity<?> deleteBreastFeeding(@PathVariable Long feedingId) {
    feedingsService.deleteFeedingById(feedingId);
    return ResponseEntity.ok().build();
  }
}
