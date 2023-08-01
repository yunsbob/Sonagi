package com.fa.sonagi.record.health.service;

import com.fa.sonagi.record.health.dto.HealthPostDto;
import com.fa.sonagi.record.health.dto.HealthPutDto;
import com.fa.sonagi.record.health.entity.Medication;

public interface MedicationService {

  Medication findMedicationById(Long id);

  void registMedication(HealthPostDto healthPostDto);

  void updateMedication(HealthPutDto healthPutDto);

  void deleteMedicationById(Long id);

}