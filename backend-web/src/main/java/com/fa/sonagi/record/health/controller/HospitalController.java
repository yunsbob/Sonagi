package com.fa.sonagi.record.health.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.health.dto.HealthPostDto;
import com.fa.sonagi.record.health.dto.HealthPutDto;
import com.fa.sonagi.record.health.service.HospitalService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Hospital", description = "병원 API")
@RequestMapping("/api/hospitals")
@RestController
@RequiredArgsConstructor
public class HospitalController {

  private final HospitalService hospitalService;

  @PostMapping
  public ResponseEntity<?> registHospital(@RequestBody HealthPostDto hospitalPostDto) {
    hospitalService.registHospital(hospitalPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updateHospital(@RequestBody HealthPutDto hospitalPutDto) {
    hospitalService.updateHospital(hospitalPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{hospitalId}")
  public ResponseEntity<?> deleteHospital(@PathVariable Long hospitalId) {
    hospitalService.deleteHospitalById(hospitalId);
    return ResponseEntity.ok().build();
  }
}
