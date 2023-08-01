package com.fa.sonagi.record.meal.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.dto.SnackPostDto;
import com.fa.sonagi.record.meal.dto.SnackPutDto;
import com.fa.sonagi.record.meal.dto.SnackResDto;
import com.fa.sonagi.record.meal.service.SnacksService;

import lombok.RequiredArgsConstructor;

@Tag(name = "Snack", description = "간식 API")
@RequestMapping("/api/snacks")
@RestController
@RequiredArgsConstructor
public class SnacksController {

  private final SnacksService snacksService;

  /**
   * 간식 기록 조회
   */
  @GetMapping("/{snackId}")
  public ResponseEntity<?> getSnack(@PathVariable Long snackId) {
    SnackResDto snackResDto = snacksService.findSnackById(snackId);
    return ResponseEntity.ok().body(snackResDto);
  }

  /**
   * 간식 기록 등록
   */
  @PostMapping
  public ResponseEntity<?> registSnack(@RequestBody SnackPostDto snackPostDto) {
    snacksService.registSnack(snackPostDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 간식 기록 수정
   */
  @PutMapping
  public ResponseEntity<?> updateSnack(@RequestBody SnackPutDto snackPutDto) {
    snacksService.updateSnack(snackPutDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 간식 기록 삭제
   */
  @DeleteMapping("/{snackId}")
  public ResponseEntity<?> deleteBabyFood(@PathVariable Long snackId) {
    snacksService.deleteSnackById(snackId);
    return ResponseEntity.ok().build();
  }
}
