package com.fa.sonagi.record.meal.controller;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.dto.MealResDto;
import com.fa.sonagi.record.meal.service.BabyFoodsService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "BabyFood", description = "이유식 API")
@RequestMapping("/api/babyFoods")
@RestController
@RequiredArgsConstructor
public class BabyFoodsController {

  private final BabyFoodsService babyFoodsService;

  /**
   * 이유식 기록 조회
   */
  @GetMapping("/{babyFoodId}")
  public ResponseEntity<?> getBabyFood(@PathVariable Long babyFoodId) {
    MealResDto mealResDto = babyFoodsService.findBabyFoodById(babyFoodId);
    return ResponseEntity.ok().body(mealResDto);
  }

  /**
   * 이유식 기록 등록
   */
  @PostMapping
  public ResponseEntity<?> registBabyFood(@RequestBody MealPostDto mealPostDto) {
    babyFoodsService.registBabyFood(mealPostDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 이유식 기록 수정
   */
  @PutMapping
  public ResponseEntity<?> updateBabyFood(@RequestBody MealPutDto mealPutDto) {
    babyFoodsService.updateBabyFood(mealPutDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 이유식 기록 삭제
   */
  @DeleteMapping("/{babyFoodId}")
  public ResponseEntity<?> deleteBabyFood(@PathVariable Long babyFoodId) {
    babyFoodsService.deleteBabyFoodById(babyFoodId);
    return ResponseEntity.ok().build();
  }
}
