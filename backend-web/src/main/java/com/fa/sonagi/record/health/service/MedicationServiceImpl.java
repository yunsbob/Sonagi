package com.fa.sonagi.record.health.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.health.dto.HealthPostDto;
import com.fa.sonagi.record.health.dto.HealthPutDto;
import com.fa.sonagi.record.health.entity.Medication;
import com.fa.sonagi.record.health.repository.MedicationRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MedicationServiceImpl implements MedicationService {

  private final MedicationRepository medicationRepository;

  /**
   * 투약 기록 아이디로 조회
   */
  @Override
  public Medication findMedicationById(Long id) {
    return medicationRepository.findById(id).orElseThrow();
  }

  /**
   * 투약 기록 등록
   */
  @Override
  @Transactional
  public void registMedication(HealthPostDto healthPostDto) {
    Medication medication = Medication.builder()
        .userId(healthPostDto.getUserId())
        .babyId(healthPostDto.getBabyId())
        .createdDate(healthPostDto.getCreatedDate())
        .createdTime(healthPostDto.getCreatedTime())
        .memo(healthPostDto.getMemo())
        .build();

    medicationRepository.save(medication);
  }

  /**
   * 투약 기록 수정
   */
  @Override
  @Transactional
  public void updateMedication(HealthPutDto healthPutDto) {
    Medication medication = findMedicationById(healthPutDto.getId());
    medication.updateMedication(healthPutDto.getCreatedTime(), medication.getMemo());
  }

  /**
   * 투약 기록 삭제
   */
  @Override
  @Transactional
  public void deleteMedicationById(Long id) {
    Medication medication = findMedicationById(id);
    medicationRepository.delete(medication);
  }

}