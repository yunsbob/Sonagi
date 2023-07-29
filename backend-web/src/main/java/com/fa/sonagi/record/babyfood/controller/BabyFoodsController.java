package com.fa.sonagi.record.babyfood.controller;

import com.fa.sonagi.record.babyfood.dto.BabyFoodsPostDto;
import com.fa.sonagi.record.babyfood.service.BabyFoodsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class BabyFoodsController {

  private final BabyFoodsService babyFoodsService;

  @PostMapping("/babyFoods")
  public ResponseEntity<?> registBabyFoods(@RequestBody BabyFoodsPostDto babyFoodsPostDto) {
    babyFoodsService.registBabyFoods(babyFoodsPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping("/babyFoods")
  public ResponseEntity<?> updateBabyFoods() {
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/babyFoods/{babyFoodsId}")
  public ResponseEntity<?> deleteBabyFoods(@PathVariable Long babyFoodsId) {
    babyFoodsService.deleteBabyFoodsById(babyFoodsId);

    return ResponseEntity.ok().build();
  }
}
