package com.fa.sonagi.record.diaper.repository;

import static com.fa.sonagi.record.diaper.entity.QPee.*;

import com.fa.sonagi.record.diaper.dto.DiaperResDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class PeeRepositoryImpl implements PeeRepositoryCustom {
	private final JPAQueryFactory queryFactory;

	@Override
	public DiaperResDto findPeeRecord(Long peeId) {
		DiaperResDto pees = queryFactory
			.select(Projections.bean(DiaperResDto.class,
				pee.id,
				pee.createdTime,
				pee.memo))
			.from(pee)
			.where(pee.id.eq(peeId))
			.fetchOne();
		return pees;
	}
}
