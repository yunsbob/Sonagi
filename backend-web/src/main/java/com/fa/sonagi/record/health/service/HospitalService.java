package com.fa.sonagi.record.health.service;

import com.fa.sonagi.record.health.dto.HealthPostDto;
import com.fa.sonagi.record.health.dto.HealthPutDto;
import com.fa.sonagi.record.health.entity.Hospital;

public interface HospitalService {

  Hospital findHospitalById(Long id);

  void registHospital(HealthPostDto hospitalPostDto);

  void updateHospital(HealthPutDto hospitalPutDto);

  void deleteHospitalById(Long id);
}
