package com.fa.sonagi.record.meal.repository;

import com.fa.sonagi.record.meal.dto.MealResDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

import static com.fa.sonagi.record.meal.entity.QBabyFood.babyFood;

@RequiredArgsConstructor
public class BabyFoodRepositoryImpl implements BabyFoodRepositoryCustom{

	private final JPAQueryFactory queryFactory;

	@Override
	public MealResDto findBabyFoodDetailRecord(Long babyFoodId) {
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
}
