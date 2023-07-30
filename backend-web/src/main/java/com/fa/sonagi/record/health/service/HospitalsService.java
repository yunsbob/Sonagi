package com.fa.sonagi.record.health.service;

import com.fa.sonagi.record.health.dto.HealthPostDto;
import com.fa.sonagi.record.health.dto.HealthPutDto;
import com.fa.sonagi.record.health.entity.Hospitals;

public interface HospitalsService {

  Hospitals findHospitalsById(Long id);

  void registHospitals(HealthPostDto hospitalsPostDto);

  void updateHospitals(HealthPutDto hospitalsPutDto);

  void deleteHospitalsById(Long id);
}
