package com.fa.sonagi.record.health.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.health.dto.HealthPostDto;
import com.fa.sonagi.record.health.dto.HealthPutDto;
import com.fa.sonagi.record.health.entity.Hospitals;
import com.fa.sonagi.record.health.repository.HospitalsRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class HospitalsServiceImpl implements HospitalsService {

  private final HospitalsRepository hospitalsRepository;

  /**
   * 병원 기록 아이디로 조회
   */
  @Override
  public Hospitals findHospitalsById(Long id) {
    return hospitalsRepository.findById(id).orElseThrow();
  }

  /**
   * 병원 기록 등록
   */
  @Override
  @Transactional
  public void registHospitals(HealthPostDto healthPostDto) {
    Hospitals hospitals = Hospitals.builder()
        .userId(healthPostDto.getUserId())
        .babyId(healthPostDto.getBabyId())
        .createdDate(healthPostDto.getCreatedDate())
        .createdTime(healthPostDto.getCreatedTime())
        .memo(healthPostDto.getMemo())
        .build();

    hospitalsRepository.save(hospitals);
  }

  /**
   * 병원 기록 수정
   */
  @Override
  @Transactional
  public void updateHospitals(HealthPutDto healthPutDto) {
    Hospitals hospitals = findHospitalsById(healthPutDto.getId());
    hospitals.updateHospitals(healthPutDto.getCreatedTime(), healthPutDto.getMemo());
  }

  /**
   * 병원 기록 삭제
   */
  @Override
  @Transactional
  public void deleteHospitalsById(Long id) {
    Hospitals hospitals = findHospitalsById(id);
    hospitalsRepository.delete(hospitals);
  }
}
