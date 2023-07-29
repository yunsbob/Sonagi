package com.fa.sonagi.record.babyfood.service;

import com.fa.sonagi.record.babyfood.dto.BabyFoodsPostDto;
import com.fa.sonagi.record.babyfood.dto.BabyFoodsPutDto;
import com.fa.sonagi.record.babyfood.entity.BabyFoods;
import com.fa.sonagi.record.babyfood.repository.BabyFoodsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BabyFoodsService {
  private final BabyFoodsRepository babyFoodsRepository;

  public BabyFoods findBabyFoodsById(Long id) {
    return babyFoodsRepository.findById(id).orElseThrow();
  }

  public void registBabyFoods(BabyFoodsPostDto babyFoodsPostDto) {
    BabyFoods babyFoods = BabyFoods.builder()
            .userId(babyFoodsPostDto.getUserId())
            .babyId(babyFoodsPostDto.getBabyId())
            .createdTime(babyFoodsPostDto.getCreatedTime())
            .amount(babyFoodsPostDto.getAmount())
            .memo(babyFoodsPostDto.getMemo())
            .build();

    babyFoodsRepository.save(babyFoods);
  }

  public void updateBabyFoods(BabyFoodsPutDto babyFoodsPutDto) {
    BabyFoods babyFoods = findBabyFoodsById(babyFoodsPutDto.getId());

  }

  public void deleteBabyFoodsById(Long id) {
    BabyFoods babyFoods = findBabyFoodsById(id);

    babyFoodsRepository.delete(babyFoods);
  }
}
