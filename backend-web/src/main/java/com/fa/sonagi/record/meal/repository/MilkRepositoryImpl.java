package com.fa.sonagi.record.meal.repository;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.meal.dto.MealResDto;
import com.fa.sonagi.statistics.meal.dto.MealStatisticsQueryDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

import static com.fa.sonagi.record.meal.entity.QMilk.milk;

@RequiredArgsConstructor
public class MilkRepositoryImpl implements MilkRepositoryCustom{

	private final JPAQueryFactory queryFactory;

	@Override
	public MealResDto findMilkRecord(Long milkId) {
		MealResDto milks = queryFactory
			.select(Projections.bean(MealResDto.class,
				milk.id,
				milk.amount,
				milk.memo,
				milk.createdTime))
			.from(milk)
			.where(milk.id.eq(milkId))
			.fetchOne();

		return milks;
	}

	@Override
	public List<MealStatisticsQueryDto> findMilkByDay(Long babyId, LocalDate createdDate) {
		List<MealStatisticsQueryDto> mealStatisticsQueryDto = queryFactory
			.select(Projections.bean(MealStatisticsQueryDto.class,
				milk.createdTime,
				milk.amount))
			.from(milk)
			.where(milk.babyId.eq(babyId), milk.createdDate.eq(createdDate))
			.fetch();

		return mealStatisticsQueryDto;
	}

	@Override
	public Long findMilkCnt(Long babyId, LocalDate createdDate) {
		Long cnt = queryFactory
			.select(milk.count())
			.from(milk)
			.where(milk.babyId.eq(babyId), milk.createdDate.eq(createdDate))
			.fetchFirst();

		return cnt;
	}

	@Override
	public Long findMilkAmount(Long babyId, LocalDate createdDate) {
		Long amount = queryFactory
			.select(milk.amount.sum().coalesce(0L))
			.from(milk)
			.where(milk.babyId.eq(babyId), milk.createdDate.eq(createdDate))
			.fetchFirst();

		return amount;
	}
}
