package com.fa.sonagi.record.meal.repository;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.meal.dto.FeedingResDto;
import com.fa.sonagi.statistics.meal.dto.SnackFeedingStatisticsQueryDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

import static com.fa.sonagi.record.meal.entity.QFeeding.feeding;

@RequiredArgsConstructor
public class FeedingRepositoryImpl implements FeedingRepostioryCustom{

	private final JPAQueryFactory queryFactory;

	@Override
	public FeedingResDto findFeedingRecord(Long feedingId) {
		FeedingResDto feedings = queryFactory
			.select(Projections.bean(FeedingResDto.class,
				feeding.id,
				feeding.leftStartTime,
				feeding.rightStartTime,
				feeding.leftEndTime,
				feeding.rightEndTime,
				feeding.memo))
			.from(feeding)
			.where(feeding.id.eq(feedingId))
			.fetchOne();

		return feedings;
	}

	@Override
	public List<SnackFeedingStatisticsQueryDto> findFeedingByDay(Long babyId, LocalDate createdDate) {
		List<SnackFeedingStatisticsQueryDto> snackFeedingStatisticsQueryDto = queryFactory
			.select(Projections.bean(SnackFeedingStatisticsQueryDto.class,
				feeding.leftStartTime.as("createdTime")))
			.from(feeding)
			.where(feeding.babyId.eq(babyId), feeding.createdDate.eq(createdDate))
			.fetch();

		return snackFeedingStatisticsQueryDto;
	}

	@Override
	public Long findFeedingCnt(Long babyId, LocalDate createdDate) {
		Long cnt = queryFactory
			.select(feeding.count())
			.from(feeding)
			.where(feeding.babyId.eq(babyId), feeding.createdDate.eq(createdDate))
			.fetchFirst();

		return cnt;
	}
}
