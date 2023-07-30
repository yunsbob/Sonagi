package com.fa.sonagi.record.health.service;

import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.record.health.dto.HospitalsPostDto;
import com.fa.sonagi.record.health.dto.HospitalsPutDto;
import com.fa.sonagi.record.health.entity.Hospitals;
import com.fa.sonagi.record.health.repository.HospitalsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class HospitalsServiceImpl implements HospitalsService {

  private final HospitalsRepository hospitalsRepository;
  private final BabyRepository babyRepository;

  @Override
  public Hospitals findHospitalsById(Long id) {
    return hospitalsRepository.findById(id).orElseThrow();
  }

  @Override
  public void registHospitals(HospitalsPostDto hospitalsPostDto) {
    Baby baby = babyRepository.findById(hospitalsPostDto.getBabyId()).orElseThrow();

    Hospitals hospitals = Hospitals.builder()
        .userId(hospitalsPostDto.getUserId())
        .baby(baby)
        .createdDate(hospitalsPostDto.getCreatedDate())
        .createdTime(hospitalsPostDto.getCreatedTime())
        .memo(hospitalsPostDto.getMemo())
        .build();

    hospitalsRepository.save(hospitals);
  }

  @Override
  public void updateHospitals(HospitalsPutDto hospitalsPutDto) {
    Hospitals hospitals = findHospitalsById(hospitalsPutDto.getId());
    hospitals.updateHospitals(hospitalsPutDto.getCreatedTime(), hospitalsPutDto.getMemo());
  }

  @Override
  public void deleteHospitalsById(Long id) {
    Hospitals hospitals = findHospitalsById(id);
    hospitalsRepository.delete(hospitals);
  }
}
