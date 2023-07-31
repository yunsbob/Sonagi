package com.fa.sonagi.record.health.controller;

import com.fa.sonagi.record.health.dto.HealthPostDto;
import com.fa.sonagi.record.health.dto.HealthPutDto;
import com.fa.sonagi.record.health.service.MedicationsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/medications")
@RestController
@RequiredArgsConstructor
public class MedicationsController {

  private final MedicationsService medicationsService;

  @PostMapping
  public ResponseEntity<?> registMedications(@RequestBody HealthPostDto healthPostDto) {
    medicationsService.registMedications(healthPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updateMedications(@RequestBody HealthPutDto healthPutDto) {
    medicationsService.updateMedications(healthPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{medicationId}")
  public ResponseEntity<?> deleteMedications(@PathVariable Long medicationId) {
    medicationsService.deleteMedicationsById(medicationId);
    return ResponseEntity.ok().build();
  }
}