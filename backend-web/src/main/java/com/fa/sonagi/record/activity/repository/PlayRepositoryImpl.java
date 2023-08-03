package com.fa.sonagi.record.activity.repository;

import static com.fa.sonagi.record.activity.entity.QPlay.*;

import com.fa.sonagi.record.activity.dto.ActivityResDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class PlayRepositoryImpl implements PlayRepositoryCustom {
	private final JPAQueryFactory queryFactory;

	@Override
	public ActivityResDto findPlayRecord(Long playId) {
		ActivityResDto plays = queryFactory
			.select(Projections.bean(ActivityResDto.class,
				play.id,
				play.createdTime,
				play.endTime,
				play.memo))
			.from(play)
			.where(play.id.eq(playId))
			.fetchOne();
		return plays;
	}
}
