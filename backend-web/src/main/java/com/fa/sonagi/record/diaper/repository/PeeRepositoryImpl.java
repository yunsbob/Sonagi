package com.fa.sonagi.record.diaper.repository;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.diaper.dto.DiaperResDto;
import com.fa.sonagi.statistics.diaper.dto.DiaperStatisticsQueryDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

import static com.fa.sonagi.record.diaper.entity.QPee.pee;

@RequiredArgsConstructor
public class PeeRepositoryImpl implements PeeRepositoryCustom{

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


	@Override
	public List<DiaperStatisticsQueryDto> findPeeByDay(Long babyId, LocalDate createdDate) {
		List<DiaperStatisticsQueryDto> diaperStatisticsQueryDto = queryFactory
			.select(Projections.bean(DiaperStatisticsQueryDto.class,
				pee.createdTime))
			.from(pee)
			.where(pee.babyId.eq(babyId), pee.createdDate.eq(createdDate))
			.fetch();

		return diaperStatisticsQueryDto;
	}

	@Override
	public Long findPeeCnt(Long babyId, LocalDate createdDate) {
		Long cnt = queryFactory
			.select(pee.count())
			.from(pee)
			.where(pee.babyId.eq(babyId), pee.createdDate.eq(createdDate))
			.fetchFirst();

		return cnt;
	}
}
