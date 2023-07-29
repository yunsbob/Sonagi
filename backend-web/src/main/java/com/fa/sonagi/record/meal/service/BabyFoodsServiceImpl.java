package com.fa.sonagi.record.meal.service;

import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.entity.BabyFood;
import com.fa.sonagi.record.meal.repository.BabyFoodsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BabyFoodsServiceImpl implements BabyFoodsService{

  private final BabyFoodsRepository babyFoodsRepository;
  private final BabyRepository babyRepository;

  @Override
  public BabyFood findBabyFoodsById(Long id) {
    return babyFoodsRepository.findById(id).orElseThrow();
  }

  @Override
  public void registBabyFoods(MealPostDto mealPostDto) {
    Baby baby = babyRepository.findById(mealPostDto.getBabyId()).orElseThrow();

    BabyFood babyFood = BabyFood.builder()
            .userId(mealPostDto.getUserId())
            .baby(baby)
            .createdTime(mealPostDto.getCreatedTime())
            .createdDate(mealPostDto.getCreatedDate())
            .amount(mealPostDto.getAmount())
            .memo(mealPostDto.getMemo())
            .build();

    babyFoodsRepository.save(babyFood);
  }

  @Override
  public void updateBabyFoods(MealPutDto mealPutDto) {
    BabyFood babyFood = findBabyFoodsById(mealPutDto.getId());

    babyFood.updateBabyFoods(mealPutDto.getAmount(), mealPutDto.getMemo(), mealPutDto.getCreatedTime());
  }

  @Override
  public void deleteBabyFoodsById(Long id) {
    BabyFood babyFood = findBabyFoodsById(id);

    babyFoodsRepository.delete(babyFood);
  }
}
