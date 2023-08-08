package com.fa.sonagi.statistics.health.service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalAdjusters;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.health.repository.FeverRepository;
import com.fa.sonagi.record.health.repository.HospitalRepository;
import com.fa.sonagi.record.health.repository.MedicationRepository;
import com.fa.sonagi.statistics.health.dto.HealthStatisticsDayForWeekDto;
import com.fa.sonagi.statistics.health.dto.HealthStatisticsQueryDto;
import com.fa.sonagi.statistics.health.dto.HealthStatisticsResDto;
import com.fa.sonagi.statistics.health.dto.HealthStatisticsWeekResDto;

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
		List<HealthStatisticsQueryDto> hospitals = hospitalRepository.findHospitalByDay(babyId, createdDate);
		healthStatisticsResDto.setHospitals(hospitals);
		List<HealthStatisticsQueryDto> medications = medicationRepository.findMedicationByDay(babyId, createdDate);
		healthStatisticsResDto.setMedications(medications);

		// 카테고리별 카드 통계 조회
		Long hospitalCnt = (long)hospitals.size();
		healthStatisticsResDto.setHospitalCnt(hospitalCnt);
		Long medicationCnt = (long)medications.size();
		healthStatisticsResDto.setMedicationCnt(medicationCnt);
		Double feverAvg = feverRepository.findFeverAvg(babyId, createdDate);
		healthStatisticsResDto.setFeverAvg(feverAvg);

		// 하루 전 데이터 조회
		createdDate = createdDate.minus(1, ChronoUnit.DAYS);

		// 병원 횟수 통계 퍼센트 계산
		Long yesterdayHospitalCnt = hospitalRepository.findHospitalCnt(babyId, createdDate);
		Long hospitalCntPercent = getPercent(hospitalCnt, yesterdayHospitalCnt);
		Long yesterdayHospitalCntPercent = getPercent(yesterdayHospitalCnt, hospitalCnt);
		healthStatisticsResDto.setHospitalCntPercent(hospitalCntPercent);
		healthStatisticsResDto.setYesterdayHospitalCntPercent(yesterdayHospitalCntPercent);

		// 투약 횟수 통계 퍼센트 계산
		Long yesterdayMedicationCnt = medicationRepository.findMedicationCnt(babyId, createdDate);
		Long medicationCntPercent = getPercent(medicationCnt, yesterdayMedicationCnt);
		Long yesterdayMedicationCntPercent = getPercent(yesterdayMedicationCnt, medicationCnt);
		healthStatisticsResDto.setMedicationCntPercent(medicationCntPercent);
		healthStatisticsResDto.setYesterdayMedicationCntPercent(yesterdayMedicationCntPercent);

		// 체온 평균 통계 퍼센트 계산
		Double yesterdayFeverAvg = feverRepository.findFeverAvg(babyId, createdDate);
		Long feverPercent = getPercent(feverAvg, yesterdayFeverAvg);
		Long yesterdayFeverPercent = getPercent(yesterdayFeverAvg, feverAvg);
		healthStatisticsResDto.setFeverAvgPercent(feverPercent);
		healthStatisticsResDto.setYesterdayFeverAvgPercent(yesterdayFeverPercent);

		return healthStatisticsResDto;
	}

	/**
	 * 주별 통계 계산
	 */
	@Override
	public HealthStatisticsWeekResDto getHealthStatisticsWeek(Long babyId, LocalDate createdDate) {
		LocalDate monday = createdDate.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY));
		LocalDate sunday = createdDate.with(TemporalAdjusters.nextOrSame(DayOfWeek.SUNDAY));
		HealthStatisticsWeekResDto healthStatisticsWeekResDto = new HealthStatisticsWeekResDto();

		// 카테고리별 일주일 데이터 조회
		Map<LocalDate, Long> hospitals = hospitalRepository.findHospitalCnt(babyId, monday, sunday);
		Map<LocalDate, Long> medications = medicationRepository.findMedicationCnt(babyId, monday, sunday);
		Map<LocalDate, Double> fevers = feverRepository.findFeverAvg(babyId, monday, sunday);

		// 날짜별 데이터 세팅
		LocalDate writeDay = monday;
		for (int i = 0; i < 7; i++) {
			HealthStatisticsDayForWeekDto healthStatisticsDayForWeekDto = new HealthStatisticsDayForWeekDto();

			if (hospitals.containsKey(writeDay))
				healthStatisticsDayForWeekDto.setHospitalCnt(hospitals.get(writeDay));
			else
				healthStatisticsDayForWeekDto.setHospitalCnt(0L);

			if (medications.containsKey(writeDay))
				healthStatisticsDayForWeekDto.setMedicationCnt(medications.get(writeDay));
			else
				healthStatisticsDayForWeekDto.setMedicationCnt(0L);

			if (fevers.containsKey(writeDay))
				healthStatisticsDayForWeekDto.setFeverAvg(fevers.get(writeDay));
			else
				healthStatisticsDayForWeekDto.setFeverAvg((double)0);

			healthStatisticsWeekResDto.getHealthStatistics().put(writeDay.format(DateTimeFormatter.ofPattern("M/dd")), healthStatisticsDayForWeekDto);
			writeDay = writeDay.plusDays(1);
		}

		// 카테고리별 일주일 통계 조회
		Long hospitalCnt = hospitalRepository.findHospitalCntByWeek(babyId, monday, sunday);
		healthStatisticsWeekResDto.setHospitalCnt(hospitalCnt);
		Long medicationCnt = medicationRepository.findMedicationCntByWeek(babyId, monday, sunday);
		healthStatisticsWeekResDto.setMedicationCnt(medicationCnt);
		Double feverAvg = feverRepository.findFeverAvgByWeek(babyId, monday, sunday);
		healthStatisticsWeekResDto.setFeverAvg(feverAvg);

		monday = monday.minusWeeks(1);
		sunday = sunday.minusWeeks(1);

		// 병원 횟수 통계 퍼센트 계산
		Long lastWeekHospitalCnt = hospitalRepository.findHospitalCntByWeek(babyId, monday, sunday);
		Long hospitalCntPercent = getPercent(hospitalCnt, lastWeekHospitalCnt);
		Long lastWeekHospitalCntPercent = getPercent(lastWeekHospitalCnt, hospitalCnt);
		healthStatisticsWeekResDto.setHospitalCntPercent(hospitalCntPercent);
		healthStatisticsWeekResDto.setLastWeekHospitalCntPercent(lastWeekHospitalCntPercent);

		// 투약 횟수 통계 퍼센트 계산
		Long lastWeekMedicationCnt = medicationRepository.findMedicationCntByWeek(babyId, monday, sunday);
		Long medicationCntPercent = getPercent(medicationCnt, lastWeekMedicationCnt);
		Long lastWeekMedicationCntPercent = getPercent(lastWeekMedicationCnt, medicationCnt);
		healthStatisticsWeekResDto.setMedicationCntPercent(medicationCntPercent);
		healthStatisticsWeekResDto.setLastWeekMedicationCntPercent(lastWeekMedicationCntPercent);

		// 체온 평균 통계 퍼센트 계산
		Double lastWeekFeverAvg = feverRepository.findFeverAvgByWeek(babyId, monday, sunday);
		Long feverPercent = getPercent(feverAvg, lastWeekFeverAvg);
		Long lastWeekFeverPercent = getPercent(lastWeekFeverAvg, feverAvg);
		healthStatisticsWeekResDto.setFeverAvgPercent(feverPercent);
		healthStatisticsWeekResDto.setLastWeekFeverAvgPercent(lastWeekFeverPercent);

		return healthStatisticsWeekResDto;
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
