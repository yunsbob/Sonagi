package com.fa.sonagi.record.meal.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.meal.dto.FeedingPostDto;
import com.fa.sonagi.record.meal.dto.FeedingPutDto;
import com.fa.sonagi.record.meal.dto.FeedingResDto;
import com.fa.sonagi.record.meal.service.FeedingService;

import lombok.RequiredArgsConstructor;

@Tag(name = "Feeding", description = "수유 API")
@RequestMapping("/api/feedings")
@RestController
@RequiredArgsConstructor
public class FeedingController {

  private final FeedingService feedingService;

  /**
   * 수유 기록 조회
   */
  @GetMapping("/{feedingId}")
  public ResponseEntity<?> getFeeding(@PathVariable Long feedingId) {
    FeedingResDto feedingResDto = feedingService.findFeedingById(feedingId);
    return ResponseEntity.ok().body(feedingResDto);
  }

  /**
   * 수유 기록 등록
   */
  @PostMapping
  public ResponseEntity<?> registBreastFeeding(@RequestBody FeedingPostDto feedingPostDto) {
    feedingService.registFeeding(feedingPostDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 수유 기록 수정
   */
  @PutMapping
  public ResponseEntity<?> updateFeeding(@RequestBody FeedingPutDto feedingPutDto) {
    feedingService.updateFeeding(feedingPutDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 수유 기록 삭제
   */
  @DeleteMapping("/{feedingId}")
  public ResponseEntity<?> deleteBreastFeeding(@PathVariable Long feedingId) {
    feedingService.deleteFeedingById(feedingId);
    return ResponseEntity.ok().build();
  }
}
