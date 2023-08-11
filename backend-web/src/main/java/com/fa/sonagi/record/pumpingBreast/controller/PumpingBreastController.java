package com.fa.sonagi.record.pumpingBreast.controller;

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

import com.fa.sonagi.record.pumpingBreast.dto.PumpingBreastPostDto;
import com.fa.sonagi.record.pumpingBreast.dto.PumpingBreastPutDto;
import com.fa.sonagi.record.pumpingBreast.dto.PumpingBreastResDto;
import com.fa.sonagi.record.pumpingBreast.service.PumpingBreastService;

import lombok.RequiredArgsConstructor;

@Tag(name = "PumpingBreast", description = "유축 API")
@RequestMapping("/api/pumpingBreasts")
@RestController
@RequiredArgsConstructor
public class PumpingBreastController {

  private final PumpingBreastService pumpingBreastService;

  /**
   * 유축 기록 조회
   */
  @GetMapping("{pumpingBreastId}")
  public ResponseEntity<?> getPumpingBreast(@PathVariable Long pumpingBreastId) {
    PumpingBreastResDto pumpingBreastResDto = pumpingBreastService.findPumpingBreastById(pumpingBreastId);
    return ResponseEntity.ok().body(pumpingBreastResDto);
  }

  /**
   * 유축 기록 등록
   */
  @PostMapping
  public ResponseEntity<?> registPumpingBreast(@RequestBody PumpingBreastPostDto pumpingBreastPostDto) {
    PumpingBreastResDto pumpingBreastResDto = pumpingBreastService.registPumpingBreast(pumpingBreastPostDto);
    return ResponseEntity.ok().body(pumpingBreastResDto);
  }

  /**
   * 유축 기록 수정
   */
  @PutMapping
  public ResponseEntity<?> updatePumpingBreast(@RequestBody PumpingBreastPutDto pumpingBreastPutDto) {
    pumpingBreastService.updatePumpingBreast(pumpingBreastPutDto);
    return ResponseEntity.ok().build();
  }

  /**
   * 유축 기록 삭제
   */
  @DeleteMapping("/{pumpingBreastId}")
  public ResponseEntity<?> deletePumpingBreast(@PathVariable Long pumpingBreastId) {
    pumpingBreastService.deletePumpingBreastById(pumpingBreastId);
    return ResponseEntity.ok().build();
  }
}
