package com.fa.sonagi.record.health.repository;

import static com.fa.sonagi.record.health.entity.QMedication.*;

import com.fa.sonagi.record.health.dto.HealthResDto;
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
}
