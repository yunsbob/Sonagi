package com.fa.sonagi.record.meal.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.service.MilksService;

import lombok.RequiredArgsConstructor;

@Tag(name = "Milk", description = "우유 API")
@RequestMapping("/api/milks")
@RestController
@RequiredArgsConstructor
public class MilksController {

  private final MilksService milksService;

  /**
   * 우유 기록 등록
   */
  @PostMapping
  public ResponseEntity<?> registBabyFood(@RequestBody MealPostDto mealPostDto) {
    milksService.registMilk(mealPostDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 우유 기록 수정
   */
  @PutMapping
  public ResponseEntity<?> updateBabyFood(@RequestBody MealPutDto mealPutDto) {
    milksService.updateMilk(mealPutDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 우유 기록 삭제
   */
  @DeleteMapping("/{milkId}")
  public ResponseEntity<?> deleteBabyFood(@PathVariable Long milkId) {
    milksService.deleteMilkById(milkId);
    return ResponseEntity.ok().build();
  }
}
