package com.fa.sonagi.record.meal.controller;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.service.BreastFeedingsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/breastFeeding")
@RestController
@RequiredArgsConstructor
public class BreastFeedingsController {

  private final BreastFeedingsService breastFeedingsService;

  @PostMapping
  public ResponseEntity<?> registBreastFeeding(@RequestBody MealPostDto mealPostDto) {
    breastFeedingsService.registBreastFeeding(mealPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updateBreastFeeding(@RequestBody MealPutDto mealPutDto) {
    breastFeedingsService.updateBreastFeeding(mealPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{breastFeedingId}")
  public ResponseEntity<?> deleteBreastFeeding(@PathVariable Long breastFeedingId) {
    breastFeedingsService.deleteBreastFeedingById(breastFeedingId);
    return ResponseEntity.ok().build();
  }
}
