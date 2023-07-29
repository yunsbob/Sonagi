package com.fa.sonagi.record.meal.service;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.entity.BabyFoods;

public interface BabyFoodsService {
  BabyFoods findBabyFoodsById(Long id);

  void registBabyFoods(MealPostDto mealPostDto);

  void updateBabyFoods(MealPutDto mealPutDto);

  void deleteBabyFoodsById(Long id);
}
