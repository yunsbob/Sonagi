package com.fa.sonagi.record.health.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.health.dto.HealthPostDto;
import com.fa.sonagi.record.health.dto.HealthPutDto;
import com.fa.sonagi.record.health.entity.Medications;
import com.fa.sonagi.record.health.repository.MedicationsRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MedicationsServiceImpl implements MedicationsService {

  private final MedicationsRepository medicationsRepository;

  /**
   * 투약 기록 아이디로 조회
   */
  @Override
  public Medications findMedicationsById(Long id) {
    return medicationsRepository.findById(id).orElseThrow();
  }

  /**
   * 투약 기록 등록
   */
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

  /**
   * 투약 기록 수정
   */
  @Override
  @Transactional
  public void updateMedications(HealthPutDto healthPutDto) {
    Medications medications = findMedicationsById(healthPutDto.getId());
    medications.updateMedications(healthPutDto.getCreatedTime(), medications.getMemo());
  }

  /**
   * 투약 기록 삭제
   */
  @Override
  @Transactional
  public void deleteMedicationsById(Long id) {
    Medications medications = findMedicationsById(id);
    medicationsRepository.delete(medications);
  }

}