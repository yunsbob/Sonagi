package com.fa.sonagi.record.health.repository;

import static com.fa.sonagi.record.health.entity.QHospital.*;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.health.dto.HealthResDto;
import com.fa.sonagi.statistics.health.dto.HealthStatisticsQueryDto;
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

	@Override
	public List<HealthStatisticsQueryDto> findHospitalByDay(Long babyId, LocalDate createdDate) {
		List<HealthStatisticsQueryDto> healthStatisticsQueryDto = queryFactory
			.select(Projections.bean(HealthStatisticsQueryDto.class,
				hospital.createdTime))
			.from(hospital)
			.where(hospital.babyId.eq(babyId), hospital.createdDate.eq(createdDate))
			.fetch();

		return healthStatisticsQueryDto;
	}

	@Override
	public Long findHospitalCnt(Long babyId, LocalDate createdDate) {
		Long cnt = queryFactory
			.select(hospital.count())
			.from(hospital)
			.where(hospital.babyId.eq(babyId), hospital.createdDate.eq(createdDate))
			.fetchFirst();

		return cnt;
	}
}
