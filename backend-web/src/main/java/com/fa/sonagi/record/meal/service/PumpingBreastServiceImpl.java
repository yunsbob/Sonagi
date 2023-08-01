package com.fa.sonagi.record.meal.service;

import com.fa.sonagi.record.meal.dto.MealResDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.entity.PumpingBreast;
import com.fa.sonagi.record.meal.repository.PumpingBreastRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PumpingBreastServiceImpl implements PumpingBreastService {

  private final PumpingBreastRepository pumpingBreastRepository;

  /**
   * 유축 기록 아이디로 조회
   */
  @Override
  public MealResDto findPumpingBreastById(Long id) {
    PumpingBreast pumpingBreast = pumpingBreastRepository.findById(id).orElseThrow();

    MealResDto mealResDto = MealResDto.builder()
        .id(pumpingBreast.getId())
        .amount(pumpingBreast.getAmount())
        .memo(pumpingBreast.getMemo())
        .createdTime(pumpingBreast.getCreatedTime())
        .build();

    return mealResDto;
  }

  /**
   * 유축 기록 등록
   */
  @Override
  @Transactional
  public void registPumpingBreast(MealPostDto mealPostDto) {
    PumpingBreast pumpingBreast = PumpingBreast.builder()
        .userId(mealPostDto.getUserId())
        .babyId(mealPostDto.getBabyId())
        .createdTime(mealPostDto.getCreatedTime())
        .createdDate(mealPostDto.getCreatedDate())
        .amount(mealPostDto.getAmount())
        .memo(mealPostDto.getMemo())
        .build();

    pumpingBreastRepository.save(pumpingBreast);
  }

  /**
   * 유축 기록 수정
   */
  @Override
  @Transactional
  public void updatePumpingBreast(MealPutDto mealPutDto) {
    PumpingBreast pumpingBreast = pumpingBreastRepository.findById(mealPutDto.getId()).orElseThrow();

    pumpingBreast.updatePumpingBreast(mealPutDto.getAmount(), mealPutDto.getMemo(), mealPutDto.getCreatedTime());
  }

  /**
   * 유축 기록 삭제
   */
  @Override
  @Transactional
  public void deletePumpingBreastById(Long id) {
    PumpingBreast pumpingBreast = pumpingBreastRepository.findById(id).orElseThrow();

    pumpingBreastRepository.delete(pumpingBreast);
  }
}
