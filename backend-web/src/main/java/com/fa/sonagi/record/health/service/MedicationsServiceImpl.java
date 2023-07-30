package com.fa.sonagi.record.health.service;

import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.record.health.dto.HealthPostDto;
import com.fa.sonagi.record.health.dto.HealthPutDto;
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
  public void registMedications(HealthPostDto healthPostDto) {
    Baby baby = babyRepository.findById(healthPostDto.getBabyId()).orElseThrow();

    Medications medications = Medications.builder()
        .userId(healthPostDto.getUserId())
        .baby(baby)
        .createdDate(healthPostDto.getCreatedDate())
        .createdTime(healthPostDto.getCreatedTime())
        .memo(healthPostDto.getMemo())
        .build();

    medicationsRepository.save(medications);
  }

  @Override
  public void updateMedications(HealthPutDto healthPutDto) {
    Medications medications = findMedicationsById(healthPutDto.getId());
    medications.updateMedications(healthPutDto.getCreatedTime(), medications.getMemo());
  }

  @Override
  public void deleteMedicationsById(Long id) {
    Medications medications = findMedicationsById(id);
    medicationsRepository.delete(medications);
  }

}