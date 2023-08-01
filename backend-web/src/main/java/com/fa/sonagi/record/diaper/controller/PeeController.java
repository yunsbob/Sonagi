package com.fa.sonagi.record.diaper.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.diaper.dto.DiaperPostDto;
import com.fa.sonagi.record.diaper.dto.DiaperPutDto;
import com.fa.sonagi.record.diaper.service.PeeService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Pee", description = "소변 API")
@RequestMapping("/api/pees")
@RestController
@RequiredArgsConstructor
public class PeeController {

  private final PeeService peeService;

  @PostMapping
  public ResponseEntity<?> registPee(@RequestBody DiaperPostDto diaperPostDto) {
    peeService.registPee(diaperPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updatePee(@RequestBody DiaperPutDto diaperPutDto) {
    peeService.updatePee(diaperPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{peeId}")
  public ResponseEntity<?> deletePee(@PathVariable Long peeId) {
    peeService.deletePeeById(peeId);
    return ResponseEntity.ok().build();
  }
}