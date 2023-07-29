package com.fa.sonagi.record.meal.controller;

import com.fa.sonagi.record.meal.dto.BabyFoodsPostDto;
import com.fa.sonagi.record.meal.dto.BabyFoodsPutDto;
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
  public ResponseEntity<?> registBabyFoods(@RequestBody BabyFoodsPostDto babyFoodsPostDto) {
    babyFoodsService.registBabyFoods(babyFoodsPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updateBabyFoods(@RequestBody BabyFoodsPutDto babyFoodsPutDto) {
    babyFoodsService.updateBabyFoods(babyFoodsPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{babyFoodId}")
  public ResponseEntity<?> deleteBabyFoods(@PathVariable Long babyFoodId) {
    babyFoodsService.deleteBabyFoodsById(babyFoodId);
    return ResponseEntity.ok().build();
  }
}
