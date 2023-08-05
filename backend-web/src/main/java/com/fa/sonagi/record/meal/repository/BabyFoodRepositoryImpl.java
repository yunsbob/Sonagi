package com.fa.sonagi.record.meal.repository;

import com.fa.sonagi.record.meal.dto.MealResDto;
import com.fa.sonagi.statistics.meal.dto.MealStatisticsQueryDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

import static com.fa.sonagi.record.meal.entity.QBabyFood.babyFood;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
public class BabyFoodRepositoryImpl implements BabyFoodRepositoryCustom{

	private final JPAQueryFactory queryFactory;

	@Override
	public MealResDto findBabyFoodRecord(Long babyFoodId) {
		MealResDto babyFoods = queryFactory
			.select(Projections.bean(MealResDto.class,
				babyFood.id,
				babyFood.amount,
				babyFood.memo,
				babyFood.createdTime))
			.from(babyFood)
			.where(babyFood.id.eq(babyFoodId))
			.fetchOne();

		return babyFoods;
	}

	@Override
	public List<MealStatisticsQueryDto> findBabyFoodByDay(Long babyId, LocalDate createdDate) {
		List<MealStatisticsQueryDto> mealStatisticsQueryDto = queryFactory
			.select(Projections.bean(MealStatisticsQueryDto.class,
				babyFood.createdTime,
				babyFood.amount))
			.from(babyFood)
			.where(babyFood.babyId.eq(babyId), babyFood.createdDate.eq(createdDate))
			.fetch();

		return mealStatisticsQueryDto;
	}

	@Override
	public Long findBabyFoodCnt(Long babyId, LocalDate createdDate) {
		Long cnt = queryFactory
			.select(babyFood.count())
			.from(babyFood)
			.where(babyFood.babyId.eq(babyId), babyFood.createdDate.eq(createdDate))
			.fetchFirst();

		return cnt;
	}
}
