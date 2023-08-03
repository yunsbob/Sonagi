package com.fa.sonagi.record.activity.repository;

import static com.fa.sonagi.record.activity.entity.QTummytime.*;

import com.fa.sonagi.record.activity.dto.ActivityResDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class TummytimeRepositoryImpl implements TummytimeRepositoryCustom {
	private final JPAQueryFactory queryFactory;

	@Override
	public ActivityResDto findTummytimeRecord(Long tummytimeId) {
		ActivityResDto tummytimes = queryFactory
			.select(Projections.bean(ActivityResDto.class,
				tummytime.id,
				tummytime.createdTime,
				tummytime.endTime,
				tummytime.memo))
			.from(tummytime)
			.where(tummytime.id.eq(tummytimeId))
			.fetchOne();

		return tummytimes;
	}
}
