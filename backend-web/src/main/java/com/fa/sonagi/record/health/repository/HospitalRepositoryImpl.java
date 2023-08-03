package com.fa.sonagi.record.health.repository;

import static com.fa.sonagi.record.health.entity.QHospital.*;

import com.fa.sonagi.record.health.dto.HealthResDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class HospitalRepositoryImpl implements HospitalRepositoryCustom {
	private final JPAQueryFactory queryFactory;

	@Override
	public HealthResDto findHospitalRecord(Long hospitalId) {
		HealthResDto hospitals = queryFactory
			.select(Projections.bean(HealthResDto.class,
				hospital.id,
				hospital.createdTime,
				hospital.memo))
			.from(hospital)
			.where(hospital.id.eq(hospitalId))
			.fetchOne();
		return hospitals;
	}
}
