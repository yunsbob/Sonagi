package com.fa.sonagi.record.meal.service;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.dto.MealResDto;

public interface PumpingBreastService {
  MealResDto findPumpingBreastById(Long id);

  void registPumpingBreast(MealPostDto mealPostDto);

  void updatePumpingBreast(MealPutDto mealPutDto);

  void deletePumpingBreastById(Long id);
}
