package com.fa.sonagi.record.meal.controller;

import com.fa.sonagi.record.meal.dto.MealResDto;
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

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.service.PumpingBreastsService;

import lombok.RequiredArgsConstructor;

@Tag(name = "PumpingBreast", description = "유축 API")
@RequestMapping("/api/pumpingBreasts")
@RestController
@RequiredArgsConstructor
public class PumpingBreastsController {

  private final PumpingBreastsService pumpingBreastsService;

  /**
   * 유축 기록 조회
   */
  @GetMapping("{pumpingBreastId}")
  public ResponseEntity<?> getPumpingBreast(@PathVariable Long pumpingBreastId) {
    MealResDto mealResDto = pumpingBreastsService.findPumpingBreastById(pumpingBreastId);
    return ResponseEntity.ok().body(mealResDto);
  }

  /**
   * 유축 기록 등록
   */
  @PostMapping
  public ResponseEntity<?> registPumpingBreast(@RequestBody MealPostDto mealPostDto) {
    pumpingBreastsService.registPumpingBreast(mealPostDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 유축 기록 수정
   */
  @PutMapping
  public ResponseEntity<?> updatePumpingBreast(@RequestBody MealPutDto mealPutDto) {
    pumpingBreastsService.updatePumpingBreast(mealPutDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 유축 기록 삭제
   */
  @DeleteMapping("/{pumpingBreastId}")
  public ResponseEntity<?> deletePumpingBreast(@PathVariable Long pumpingBreastId) {
    pumpingBreastsService.deletePumpingBreastById(pumpingBreastId);
    return ResponseEntity.ok().build();
  }
}
