package com.fa.sonagi.record.meal.service;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.dto.MealResDto;

public interface MilksService {
  MealResDto findMilkById(Long id);

  void registMilk(MealPostDto mealPostDto);

  void updateMilk(MealPutDto mealPutDto);

  void deleteMilkById(Long id);
}
