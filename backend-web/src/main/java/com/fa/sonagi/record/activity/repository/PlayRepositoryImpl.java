package com.fa.sonagi.record.activity.repository;

import static com.fa.sonagi.record.activity.entity.QPlay.*;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.activity.dto.ActivityResDto;
import com.fa.sonagi.statistics.activity.dto.ActivityStatisticsQueryDto;
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

	@Override
	public List<ActivityStatisticsQueryDto> findPlayByDay(Long babyId, LocalDate createdDate) {
		List<ActivityStatisticsQueryDto> activityStatisticsQueryDto = queryFactory
			.select(Projections.bean(ActivityStatisticsQueryDto.class,
				play.createdTime,
				play.endTime))
			.from(play)
			.where(play.babyId.eq(babyId), play.createdDate.eq(createdDate))
			.fetch();

		return activityStatisticsQueryDto;
	}
}
