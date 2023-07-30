package com.fa.sonagi.record.health.service;

import com.fa.sonagi.record.health.dto.MedicationsPostDto;
import com.fa.sonagi.record.health.dto.MedicationsPutDto;
import com.fa.sonagi.record.health.entity.Medications;

public interface MedicationsService {

  Medications findMedicationsById(Long id);

  void registMedications(MedicationsPostDto medicationsPostDto);

  void updateMedications(MedicationsPutDto medicationsPutDto);

  void deleteMedicationsById(Long id);

}