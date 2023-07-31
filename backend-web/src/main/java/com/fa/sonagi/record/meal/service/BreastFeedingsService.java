package com.fa.sonagi.record.meal.service;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.dto.MealResDto;

public interface BreastFeedingsService {
  MealResDto findBreastFeedingById(Long id);

  void registBreastFeeding(MealPostDto mealPostDto);

  void updateBreastFeeding(MealPutDto mealPutDto);

  void deleteBreastFeedingById(Long id);
}
