package com.fa.sonagi.record.extra.repository;

import static com.fa.sonagi.record.extra.entity.QExtra.*;

import com.fa.sonagi.record.extra.dto.ExtraResDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ExtraRepositoryImpl implements ExtraRepositoryCustom {
	private final JPAQueryFactory queryFactory;

	@Override
	public ExtraResDto findExtraRecord(Long extraId) {
		ExtraResDto extras = queryFactory
			.select(Projections.bean(ExtraResDto.class,
				extra.id,
				extra.createdTime,
				extra.memo))
			.from(extra)
			.where(extra.id.eq(extraId))
			.fetchOne();
		return extras;
	}
}
