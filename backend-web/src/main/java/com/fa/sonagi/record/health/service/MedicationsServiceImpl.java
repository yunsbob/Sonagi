package com.fa.sonagi.record.health.service;

import com.fa.sonagi.record.health.dto.HealthPostDto;
import com.fa.sonagi.record.health.dto.HealthPutDto;
import com.fa.sonagi.record.health.entity.Medications;
import com.fa.sonagi.record.health.repository.MedicationsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MedicationsServiceImpl implements MedicationsService {

  private final MedicationsRepository medicationsRepository;

  @Override
  public Medications findMedicationsById(Long id) {
    return medicationsRepository.findById(id).orElseThrow();
  }

  @Override
  @Transactional
  public void registMedications(HealthPostDto healthPostDto) {
    Medications medications = Medications.builder()
        .userId(healthPostDto.getUserId())
        .babyId(healthPostDto.getBabyId())
        .createdDate(healthPostDto.getCreatedDate())
        .createdTime(healthPostDto.getCreatedTime())
        .memo(healthPostDto.getMemo())
        .build();

    medicationsRepository.save(medications);
  }

  @Override
  @Transactional
  public void updateMedications(HealthPutDto healthPutDto) {
    Medications medications = findMedicationsById(healthPutDto.getId());
    medications.updateMedications(healthPutDto.getCreatedTime(), medications.getMemo());
  }

  @Override
  @Transactional
  public void deleteMedicationsById(Long id) {
    Medications medications = findMedicationsById(id);
    medicationsRepository.delete(medications);
  }

}