package com.fa.sonagi.record.health.repository;

import com.fa.sonagi.record.health.dto.HealthResDto;

public interface MedicationRepositoryCustom {
	HealthResDto findMedicationRecord(Long medicationId);
}
