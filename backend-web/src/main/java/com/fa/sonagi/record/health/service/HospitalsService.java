package com.fa.sonagi.record.health.service;

import com.fa.sonagi.record.health.dto.HospitalsPostDto;
import com.fa.sonagi.record.health.dto.HospitalsPutDto;
import com.fa.sonagi.record.health.entity.Hospitals;

public interface HospitalsService {

  Hospitals findHospitalsById(Long id);

  void registHospitals(HospitalsPostDto hospitalsPostDto);

  void updateHospitals(HospitalsPutDto hospitalsPutDto);

  void deleteHospitalsById(Long id);
}
