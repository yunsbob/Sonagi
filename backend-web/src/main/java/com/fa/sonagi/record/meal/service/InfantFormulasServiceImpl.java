package com.fa.sonagi.record.meal.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
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
  public InfantFormula findInfantFormulaById(Long id) {
    return infantFormulasRepository.findById(id).orElseThrow();
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
    InfantFormula infantFormula = findInfantFormulaById(mealPutDto.getId());

    infantFormula.updateInfantFormula(mealPutDto.getAmount(), mealPutDto.getMemo(), mealPutDto.getCreatedTime());
  }

  /**
   * 분유 기록 삭제
   */
  @Override
  @Transactional
  public void deleteInfantFormulaById(Long id) {
    InfantFormula infantFormula = findInfantFormulaById(id);

    infantFormulasRepository.delete(infantFormula);
  }
}
