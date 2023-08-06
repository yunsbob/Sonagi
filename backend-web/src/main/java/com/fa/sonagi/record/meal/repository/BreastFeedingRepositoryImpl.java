package com.fa.sonagi.record.meal.repository;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.meal.dto.MealResDto;
import com.fa.sonagi.statistics.meal.dto.MealStatisticsQueryDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import static com.fa.sonagi.record.meal.entity.QBreastFeeding.breastFeeding;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class BreastFeedingRepositoryImpl implements BreastFeedingRepositoryCustom {

	private final JPAQueryFactory queryFactory;

	@Override
	public MealResDto findBreastFeedingRecord(Long breastFeedingId) {
		MealResDto breastFeedings = queryFactory
			.select(Projections.bean(MealResDto.class,
				breastFeeding.id,
				breastFeeding.amount,
				breastFeeding.memo,
				breastFeeding.createdTime))
			.from(breastFeeding)
			.where(breastFeeding.id.eq(breastFeedingId))
			.fetchOne();

		return breastFeedings;
	}

	@Override
	public List<MealStatisticsQueryDto> findBreastFeedingByDay(Long babyId, LocalDate createdDate) {
		List<MealStatisticsQueryDto> mealStatisticsQueryDto = queryFactory
			.select(Projections.bean(MealStatisticsQueryDto.class,
				breastFeeding.createdTime,
				breastFeeding.amount))
			.from(breastFeeding)
			.where(breastFeeding.babyId.eq(babyId), breastFeeding.createdDate.eq(createdDate))
			.fetch();

		return mealStatisticsQueryDto;
	}

	@Override
	public Long findBreastFeedingCnt(Long babyId, LocalDate createdDate) {
		Long cnt = queryFactory
			.select(breastFeeding.count())
			.from(breastFeeding)
			.where(breastFeeding.babyId.eq(babyId), breastFeeding.createdDate.eq(createdDate))
			.fetchFirst();

		return cnt;
	}

	@Override
	public Long findBreastFeedingAmount(Long babyId, LocalDate createdDate) {
		Long amount = queryFactory
			.select(breastFeeding.amount.sum().coalesce(0L))
			.from(breastFeeding)
			.where(breastFeeding.babyId.eq(babyId), breastFeeding.createdDate.eq(createdDate))
			.fetchFirst();

		return amount;
	}
}
