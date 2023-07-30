package com.fa.sonagi.record.health.service;

import com.fa.sonagi.record.health.dto.HealthPostDto;
import com.fa.sonagi.record.health.dto.HealthPutDto;
import com.fa.sonagi.record.health.entity.Medications;

public interface MedicationsService {

  Medications findMedicationsById(Long id);

  void registMedications(HealthPostDto healthPostDto);

  void updateMedications(HealthPutDto healthPutDto);

  void deleteMedicationsById(Long id);

}