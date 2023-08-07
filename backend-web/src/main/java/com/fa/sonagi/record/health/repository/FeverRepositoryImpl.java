package com.fa.sonagi.record.health.repository;

import static com.fa.sonagi.record.health.entity.QFever.*;

import java.time.LocalDate;

import com.fa.sonagi.record.health.dto.FeverResDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class FeverRepositoryImpl implements FeverRepositoryCustom {
	private final JPAQueryFactory queryFactory;

	@Override
	public FeverResDto findFeverRecord(Long feverId) {
		FeverResDto fevers = queryFactory
			.select(Projections.bean(FeverResDto.class,
				fever.id,
				fever.createdTime,
				fever.bodyTemperature,
				fever.memo))
			.from(fever)
			.where(fever.id.eq(feverId))
			.fetchOne();
		return fevers;
	}

	@Override
	public Double findFeverAvgByDay(Long babyId, LocalDate createdDate) {
		Double bodyTemperature = queryFactory
			.select(fever.bodyTemperature.avg())
			.from(fever)
			.where(fever.babyId.eq(babyId), fever.createdDate.eq(createdDate))
			.fetchOne();

		return bodyTemperature;
	}
}
