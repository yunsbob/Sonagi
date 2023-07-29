package com.fa.sonagi.record.meal.service;

import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.record.meal.dto.BabyFoodsPostDto;
import com.fa.sonagi.record.meal.dto.BabyFoodsPutDto;
import com.fa.sonagi.record.meal.entity.BabyFoods;
import com.fa.sonagi.record.meal.repository.BabyFoodsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BabyFoodsServiceImpl implements BabyFoodsService{

  private final BabyFoodsRepository babyFoodsRepository;
  private final BabyRepository babyRepository;

  @Override
  public BabyFoods findBabyFoodsById(Long id) {
    return babyFoodsRepository.findById(id).orElseThrow();
  }

  @Override
  public void registBabyFoods(BabyFoodsPostDto babyFoodsPostDto) {
    Baby baby = babyRepository.findById(babyFoodsPostDto.getBabyId()).orElseThrow();

    BabyFoods babyFoods = BabyFoods.builder()
            .userId(babyFoodsPostDto.getUserId())
            .baby(baby)
            .createdTime(babyFoodsPostDto.getCreatedTime())
            .createdDate(babyFoodsPostDto.getCreatedDate())
            .amount(babyFoodsPostDto.getAmount())
            .memo(babyFoodsPostDto.getMemo())
            .build();



    babyFoodsRepository.save(babyFoods);
  }

  @Override
  public void updateBabyFoods(BabyFoodsPutDto babyFoodsPutDto) {
    BabyFoods babyFoods = findBabyFoodsById(babyFoodsPutDto.getId());

    babyFoods.updateBabyFoods(babyFoodsPutDto.getAmount(), babyFoodsPutDto.getMemo(), babyFoodsPutDto.getCreatedTime());
  }

  @Override
  public void deleteBabyFoodsById(Long id) {
    BabyFoods babyFoods = findBabyFoodsById(id);

    babyFoodsRepository.delete(babyFoods);
  }
}
