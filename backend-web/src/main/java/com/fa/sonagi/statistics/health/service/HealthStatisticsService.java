package com.fa.sonagi.statistics.health.service;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.statistics.health.dto.HealthStatisticsQueryDto;
import com.fa.sonagi.statistics.health.dto.HealthStatisticsResDto;

public interface HealthStatisticsService {

	HealthStatisticsResDto getHealthStatisticsDay(Long babyId, LocalDate createdDate);

	List<HealthStatisticsQueryDto> findHospitals(Long babyId, LocalDate createdDate);

	List<HealthStatisticsQueryDto> findMedications(Long babyId, LocalDate createdDate);

	Long findHospitalCnt(Long babyId, LocalDate createdDate);

	Long findMedicationCnt(Long babyId, LocalDate createdDate);

	Double findFeverAverageDay(Long babyId, LocalDate createdDate);
}
