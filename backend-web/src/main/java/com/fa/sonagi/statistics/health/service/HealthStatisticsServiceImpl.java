package com.fa.sonagi.statistics.health.service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
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

		// 카테고리별 데이터 조회
		List<HealthStatisticsQueryDto> hospitals = findHospitals(babyId, createdDate);
		healthStatisticsResDto.setHospitals(hospitals);
		List<HealthStatisticsQueryDto> medications = findMedications(babyId, createdDate);
		healthStatisticsResDto.setMedications(medications);

		// 카테고리별 카드 통계 조회
		Long hospitalCnt = (long)hospitals.size();
		healthStatisticsResDto.setHospitalCnt(hospitalCnt);
		Long medicationCnt = (long)medications.size();
		healthStatisticsResDto.setMedicationCnt(medicationCnt);
		Double feverAvg = findFeverAverageDay(babyId, createdDate);
		healthStatisticsResDto.setFeverAvg(feverAvg);

		// 하루 전 데이터 조회
		createdDate = createdDate.minus(1, ChronoUnit.DAYS);

		// 병원 횟수 통계 percent 계산
		Long yesterdayHospitalCnt = findHospitalCnt(babyId, createdDate);
		Long todayHospitalCntPercent = getPercent(hospitalCnt, yesterdayHospitalCnt);
		Long yesterdayHospitalCntPercent = getPercent(yesterdayHospitalCnt, hospitalCnt);
		healthStatisticsResDto.setHospitalCntPercent(todayHospitalCntPercent);
		healthStatisticsResDto.setYesterdayHospitalCntPercent(yesterdayHospitalCntPercent);

		// 투약 횟수 통계 percent 계산
		Long yesterdayMedicationCnt = findMedicationCnt(babyId, createdDate);
		Long todayMedicationCntPercent = getPercent(medicationCnt, yesterdayMedicationCnt);
		Long yesterdayMedicationCntPercent = getPercent(yesterdayMedicationCnt, medicationCnt);
		healthStatisticsResDto.setMedicationCntPercent(todayMedicationCntPercent);
		healthStatisticsResDto.setYesterdayMedicationCntPercent(yesterdayMedicationCntPercent);

		// 체온 평균 통계 percent 계산
		Double yesterdayFeverAvg = findFeverAverageDay(babyId, createdDate);
		Long todayFeverPercent = getPercent(feverAvg, yesterdayFeverAvg);
		Long yesterdayFeverPercent = getPercent(yesterdayFeverAvg, feverAvg);
		healthStatisticsResDto.setFeverAvgPercent(todayFeverPercent);
		healthStatisticsResDto.setYesterdayFeverAvgPercent(yesterdayFeverPercent);

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
	 * 퍼센트 계산하기 Long
	 */
	public Long getPercent(Long target, Long opponent) {
		if (target == 0) return 0L;
		else if (target >= opponent) {
			return 100L;
		}
		else {
			return target * 100 / opponent;
		}
	}

	/**
	 * 퍼센트 계산하기 Double
	 */
	public Long getPercent(Double target, Double opponent) {
		if (target == 0) return 0L;
		else if (target >= opponent) {
			return 100L;
		}
		else {
			return (long)(target * 100 / opponent);
		}
	}
}
