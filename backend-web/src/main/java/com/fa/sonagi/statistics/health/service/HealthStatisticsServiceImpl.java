package com.fa.sonagi.statistics.health.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.health.repository.FeverRepository;
import com.fa.sonagi.record.health.repository.HospitalRepository;
import com.fa.sonagi.record.health.repository.MedicationRepository;
import com.fa.sonagi.statistics.health.dto.HealthStatisticsQueryDto;
import com.fa.sonagi.statistics.health.dto.HealthStatisticsResDto;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class HealthStatisticsServiceImpl implements HealthStatisticsService{

	private final HospitalRepository hospitalRepository;
	private final MedicationRepository medicationRepository;
	private final FeverRepository feverRepository;

	/**
	 * 일별 통계 계산
	 */
	@Override
	public HealthStatisticsResDto getHealthStatisticsDay(Long babyId, LocalDate createdDate) {
		HealthStatisticsResDto healthStatisticsResDto = new HealthStatisticsResDto();

		List<HealthStatisticsQueryDto> hospitals = findHospitals(babyId, createdDate);
		healthStatisticsResDto.setHospitals(hospitals);
		List<HealthStatisticsQueryDto> medications = findMedications(babyId, createdDate);
		healthStatisticsResDto.setMedications(medications);

		Long hospitalCnt = (long)hospitals.size();
		healthStatisticsResDto.setHospitalCnt(hospitalCnt);
		Long medicationCnt = (long)medications.size();
		healthStatisticsResDto.setMedicationCnt(medicationCnt);
		Double feverAvg = findFeverAverageDay(babyId, createdDate);
		healthStatisticsResDto.setFeverAvg(feverAvg);

		return healthStatisticsResDto;
	}

	/**
	 * 병원 데이터 일별 조회
	 */
	@Override
	public List<HealthStatisticsQueryDto> findHospitals(Long babyId, LocalDate createdDate) {
		return hospitalRepository.findHospitalByDay(babyId, createdDate);
	}

	/**
	 * 투약 데이터 일별 조회
	 */
	@Override
	public List<HealthStatisticsQueryDto> findMedications(Long babyId, LocalDate createdDate) {
		return medicationRepository.findMedicationByDay(babyId, createdDate);
	}

	/**
	 * 병원 횟수 일별 조회
	 */
	@Override
	public Long findHospitalCnt(Long babyId, LocalDate createdDate) {
		return hospitalRepository.findHospitalCnt(babyId, createdDate);
	}

	/**
	 * 투약 횟수 일별 조회
	 */
	@Override
	public Long findMedicationCnt(Long babyId, LocalDate createdDate) {
		return medicationRepository.findMedicationCnt(babyId, createdDate);
	}

	/**
	 * 하루 평균 체온 조회
	 */
	@Override
	public Double findFeverAverageDay(Long babyId, LocalDate createdDate) {
		return feverRepository.findFeverAvgByDay(babyId, createdDate);
	}

	/**
	 * 데이터들의 횟수 더하기
	 */
	public Long sumCnt(Long hospitalCnt, Long medicationCnt) {
		return hospitalCnt + medicationCnt;
	}
}
