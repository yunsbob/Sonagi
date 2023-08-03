package com.fa.sonagi.record.sleep.repository;

import static com.fa.sonagi.record.sleep.entity.QSleep.*;

import com.fa.sonagi.record.sleep.dto.SleepResDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class SleepRepositoryImpl implements SleepRepositoryCustom {
	private final JPAQueryFactory queryFactory;

	@Override
	public SleepResDto findSleepRecord(Long sleepId) {
		SleepResDto sleeps = queryFactory
			.select(Projections.bean(SleepResDto.class,
				sleep.id,
				sleep.createdTime,
				sleep.endTime,
				sleep.memo))
			.from(sleep)
			.where(sleep.id.eq(sleepId))
			.fetchOne();

		return sleeps;
	}

}
