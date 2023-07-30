package com.fa.sonagi.record.health.service;

import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.record.health.dto.MedicationsPostDto;
import com.fa.sonagi.record.health.dto.MedicationsPutDto;
import com.fa.sonagi.record.health.entity.Medications;
import com.fa.sonagi.record.health.repository.MedicationsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MedicationsServiceImpl implements MedicationsService {

  private final MedicationsRepository medicationsRepository;
  private final BabyRepository babyRepository;

  public Medications findMedicationsById(Long id) {
    return medicationsRepository.findById(id).orElseThrow();
  }

  @Override
  public void registMedications(MedicationsPostDto medicationsPostDto) {
    Baby baby = babyRepository.findById(medicationsPostDto.getBabyId()).orElseThrow();

    Medications medications = Medications.builder()
        .userId(medicationsPostDto.getUserId())
        .baby(baby)
        .createdDate(medicationsPostDto.getCreatedDate())
        .createdTime(medicationsPostDto.getCreatedTime())
        .memo(medicationsPostDto.getMemo())
        .build();

    medicationsRepository.save(medications);
  }

  @Override
  public void updateMedications(MedicationsPutDto medicationsPutDto) {
    Medications medications = findMedicationsById(medicationsPutDto.getId());
    medications.updateMedications(medicationsPutDto.getCreatedTime(), medications.getMemo());
  }

  @Override
  public void deleteMedicationsById(Long id) {
    Medications medications = findMedicationsById(id);
    medicationsRepository.delete(medications);
  }

}