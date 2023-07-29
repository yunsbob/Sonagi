package com.fa.sonagi.record.meal.controller;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.service.BabyFoodsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/babyFoods")
@RestController
@RequiredArgsConstructor
public class BabyFoodsController {

  private final BabyFoodsService babyFoodsService;

  @PostMapping
  public ResponseEntity<?> registBabyFood(@RequestBody MealPostDto mealPostDto) {
    babyFoodsService.registBabyFood(mealPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updateBabyFood(@RequestBody MealPutDto mealPutDto) {
    babyFoodsService.updateBabyFood(mealPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{babyFoodId}")
  public ResponseEntity<?> deleteBabyFood(@PathVariable Long babyFoodId) {
    babyFoodsService.deleteBabyFoodById(babyFoodId);
    return ResponseEntity.ok().build();
  }
}
