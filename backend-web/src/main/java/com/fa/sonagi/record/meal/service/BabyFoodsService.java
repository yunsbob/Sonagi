package com.fa.sonagi.record.meal.service;

import com.fa.sonagi.record.meal.dto.BabyFoodsPostDto;
import com.fa.sonagi.record.meal.dto.BabyFoodsPutDto;
import com.fa.sonagi.record.meal.entity.BabyFoods;

public interface BabyFoodsService {
  BabyFoods findBabyFoodsById(Long id);

  void registBabyFoods(BabyFoodsPostDto babyFoodsPostDto);

  void updateBabyFoods(BabyFoodsPutDto babyFoodsPutDto);

  void deleteBabyFoodsById(Long id);
}
