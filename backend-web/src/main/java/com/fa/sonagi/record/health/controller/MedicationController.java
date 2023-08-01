package com.fa.sonagi.record.health.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.health.dto.HealthPostDto;
import com.fa.sonagi.record.health.dto.HealthPutDto;
import com.fa.sonagi.record.health.service.MedicationService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Medication", description = "투약 API")
@RequestMapping("/api/medications")
@RestController
@RequiredArgsConstructor
public class MedicationController {

  private final MedicationService medicationService;

  @PostMapping
  public ResponseEntity<?> registMedication(@RequestBody HealthPostDto healthPostDto) {
    medicationService.registMedication(healthPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updateMedication(@RequestBody HealthPutDto healthPutDto) {
    medicationService.updateMedication(healthPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{medicationId}")
  public ResponseEntity<?> deleteMedication(@PathVariable Long medicationId) {
    medicationService.deleteMedicationById(medicationId);
    return ResponseEntity.ok().build();
  }
}