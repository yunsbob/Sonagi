package com.fa.sonagi.record.meal.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.service.InfantFormulasService;

import lombok.RequiredArgsConstructor;

@Tag(name = "InfantFormula", description = "분유 API")
@RequestMapping("/api/infantFormulas")
@RestController
@RequiredArgsConstructor
public class InfantFormulasController {

  private final InfantFormulasService infantFormulasService;

  /**
   * 분유 기록 등록
   */
  @PostMapping
  public ResponseEntity<?> registPumpingBreast(@RequestBody MealPostDto mealPostDto) {
    infantFormulasService.registInfantFormula(mealPostDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 분유 기록 수정
   */
  @PutMapping
  public ResponseEntity<?> updatePumpingBreast(@RequestBody MealPutDto mealPutDto) {
    infantFormulasService.updateInfantFormula(mealPutDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 분유 기록 삭제
   */
  @DeleteMapping("/{infantFormulaId}")
  public ResponseEntity<?> deletePumpingBreast(@PathVariable Long infantFormulaId) {
    infantFormulasService.deleteInfantFormulaById(infantFormulaId);
    return ResponseEntity.ok().build();
  }
}
