package com.fa.sonagi.record.health.repository;

import static com.fa.sonagi.record.health.entity.QMedication.*;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.health.dto.HealthResDto;
import com.fa.sonagi.statistics.health.dto.HealthStatisticsQueryDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class MedicationRepositoryImpl implements MedicationRepositoryCustom {
	private final JPAQueryFactory queryFactory;

	@Override
	public HealthResDto findMedicationRecord(Long medicationId) {
		HealthResDto medications = queryFactory
			.select(Projections.bean(HealthResDto.class,
				medication.id,
				medication.createdTime,
				medication.memo))
			.from(medication)
			.where(medication.id.eq(medicationId))
			.fetchOne();
		return medications;
	}

	@Override
	public List<HealthStatisticsQueryDto> findMedicationByDay(Long babyId, LocalDate createdDate) {
		List<HealthStatisticsQueryDto> healthStatisticsQueryDto = queryFactory
			.select(Projections.bean(HealthStatisticsQueryDto.class,
				medication.createdTime))
			.from(medication)
			.where(medication.babyId.eq(babyId), medication.createdDate.eq(createdDate))
			.fetch();

		return healthStatisticsQueryDto;
	}

	@Override
	public Long findMedicationCnt(Long babyId, LocalDate createdDate) {
		Long cnt = queryFactory
			.select(medication.count())
			.from(medication)
			.where(medication.babyId.eq(babyId), medication.createdDate.eq(createdDate))
			.fetchFirst();

		return cnt;
	}
}
