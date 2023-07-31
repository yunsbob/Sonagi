package com.fa.sonagi.record.health.service;

import com.fa.sonagi.record.health.dto.HealthPostDto;
import com.fa.sonagi.record.health.dto.HealthPutDto;
import com.fa.sonagi.record.health.entity.Hospitals;
import com.fa.sonagi.record.health.repository.HospitalsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class HospitalsServiceImpl implements HospitalsService {

  private final HospitalsRepository hospitalsRepository;

  @Override
  public Hospitals findHospitalsById(Long id) {
    return hospitalsRepository.findById(id).orElseThrow();
  }

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

  @Override
  @Transactional
  public void updateHospitals(HealthPutDto healthPutDto) {
    Hospitals hospitals = findHospitalsById(healthPutDto.getId());
    hospitals.updateHospitals(healthPutDto.getCreatedTime(), healthPutDto.getMemo());
  }

  @Override
  @Transactional
  public void deleteHospitalsById(Long id) {
    Hospitals hospitals = findHospitalsById(id);
    hospitalsRepository.delete(hospitals);
  }
}
