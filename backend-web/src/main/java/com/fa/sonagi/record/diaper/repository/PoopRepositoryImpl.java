package com.fa.sonagi.record.diaper.repository;

import static com.fa.sonagi.record.diaper.entity.QPoop.*;

import com.fa.sonagi.record.diaper.dto.DiaperResDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class PoopRepositoryImpl implements PoopRepositoryCustom {
	private final JPAQueryFactory queryFactory;

	@Override
	public DiaperResDto findPoopRecord(Long poopId) {
		DiaperResDto poops = queryFactory
			.select(Projections.bean(DiaperResDto.class,
				poop.id,
				poop.createdTime,
				poop.memo))
			.from(poop)
			.where(poop.id.eq(poopId))
			.fetchOne();

		return poops;
	}
}
