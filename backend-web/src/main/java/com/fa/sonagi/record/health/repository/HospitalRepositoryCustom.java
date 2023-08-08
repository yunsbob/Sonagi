package com.fa.sonagi.record.health.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import com.fa.sonagi.record.health.dto.HealthResDto;
import com.fa.sonagi.statistics.health.dto.HealthStatisticsQueryDto;

public interface HospitalRepositoryCustom {
	HealthResDto findHospitalRecord(Long hospitalId);

	List<HealthStatisticsQueryDto> findHospitalByDay(Long babyId, LocalDate createdDate);

	Long findHospitalCnt(Long babyId, LocalDate createdDate);

	Map<LocalDate, Long> findHospitalCnt(Long babyId, LocalDate monday, LocalDate sunday);

	Long findHospitalCntByWeek(Long babyId, LocalDate monday, LocalDate sunday);
}
