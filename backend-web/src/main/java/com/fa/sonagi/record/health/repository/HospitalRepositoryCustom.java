package com.fa.sonagi.record.health.repository;

import com.fa.sonagi.record.health.dto.HealthResDto;

public interface HospitalRepositoryCustom {
	HealthResDto findHospitalRecord(Long hospitalId);
}
