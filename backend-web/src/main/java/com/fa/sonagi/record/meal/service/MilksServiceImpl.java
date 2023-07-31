package com.fa.sonagi.record.meal.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.entity.InfantFormula;
import com.fa.sonagi.record.meal.entity.Milk;
import com.fa.sonagi.record.meal.repository.MilksRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MilksServiceImpl implements MilksService {

  private final MilksRepository milksRepository;

  /**
   * 우유 기록 아이디로 조회
   */
  @Override
  public Milk findMilkById(Long id) {
    return milksRepository.findById(id).orElseThrow();
  }

  /**
   * 우유 기록 등록
   */
  @Override
  @Transactional
  public void registMilk(MealPostDto mealPostDto) {
    Milk milk = Milk.builder()
        .userId(mealPostDto.getUserId())
        .babyId(mealPostDto.getBabyId())
        .createdTime(mealPostDto.getCreatedTime())
        .createdDate(mealPostDto.getCreatedDate())
        .amount(mealPostDto.getAmount())
        .memo(mealPostDto.getMemo())
        .build();

    milksRepository.save(milk);
  }

  /**
   * 우유 기록 수정
   */
  @Override
  @Transactional
  public void updateMilk(MealPutDto mealPutDto) {
    Milk milk = findMilkById(mealPutDto.getId());

    milk.updateMilk(mealPutDto.getAmount(), mealPutDto.getMemo(), mealPutDto.getCreatedTime());
  }

  /**
   * 우유 기록 삭제
   */
  @Override
  @Transactional
  public void deleteMilkById(Long id) {
    Milk milk = findMilkById(id);

    milksRepository.delete(milk);
  }
}
