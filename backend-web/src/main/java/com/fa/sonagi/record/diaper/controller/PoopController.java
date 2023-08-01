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
import com.fa.sonagi.record.diaper.service.PoopService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Poop", description = "대변 API")
@RequestMapping("/api/poops")
@RestController
@RequiredArgsConstructor
public class PoopController {

  private final PoopService poopService;

  @PostMapping
  public ResponseEntity<?> registPoop(@RequestBody DiaperPostDto diaperPostDto) {
    poopService.registPoop(diaperPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updatePoop(@RequestBody DiaperPutDto diaperPutDto) {
    poopService.updatePoop(diaperPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{poopId}")
  public ResponseEntity<?> deletePoop(@PathVariable Long poopId) {
    poopService.deletePoopById(poopId);
    return ResponseEntity.ok().build();
  }
}