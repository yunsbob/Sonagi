package com.fa.sonagi.record.meal.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.dto.MealResDto;
import com.fa.sonagi.record.meal.entity.InfantFormula;
import com.fa.sonagi.record.meal.repository.InfantFormulasRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class InfantFormulasServiceImpl implements InfantFormulasService {

  private final InfantFormulasRepository infantFormulasRepository;

  /**
   * 분유 기록 아이디로 조회
   */
  @Override
  public MealResDto findInfantFormulaById(Long id) {
    InfantFormula infantFormula = infantFormulasRepository.findById(id).orElseThrow();

    MealResDto mealResDto = MealResDto.builder()
        .amount(infantFormula.getAmount())
        .memo(infantFormula.getMemo())
        .createdTime(infantFormula.getCreatedTime())
        .build();

    return mealResDto;
  }

  /**
   * 분유 기록 등록
   */
  @Override
  @Transactional
  public void registInfantFormula(MealPostDto mealPostDto) {
    InfantFormula infantFormula = InfantFormula.builder()
        .userId(mealPostDto.getUserId())
        .babyId(mealPostDto.getBabyId())
        .createdTime(mealPostDto.getCreatedTime())
        .createdDate(mealPostDto.getCreatedDate())
        .amount(mealPostDto.getAmount())
        .memo(mealPostDto.getMemo())
        .build();

    infantFormulasRepository.save(infantFormula);
  }

  /**
   * 분유 기록 수정
   */
  @Override
  @Transactional
  public void updateInfantFormula(MealPutDto mealPutDto) {
    InfantFormula infantFormula = infantFormulasRepository.findById(mealPutDto.getId()).orElseThrow();

    infantFormula.updateInfantFormula(mealPutDto.getAmount(), mealPutDto.getMemo(), mealPutDto.getCreatedTime());
  }

  /**
   * 분유 기록 삭제
   */
  @Override
  @Transactional
  public void deleteInfantFormulaById(Long id) {
    InfantFormula infantFormula = infantFormulasRepository.findById(id).orElseThrow();

    infantFormulasRepository.delete(infantFormula);
  }
}
