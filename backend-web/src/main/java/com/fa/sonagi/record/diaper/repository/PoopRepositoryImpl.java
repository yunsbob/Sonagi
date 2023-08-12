package com.fa.sonagi.record.diaper.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.fa.sonagi.record.allCategory.dto.StatisticsTime;
import com.fa.sonagi.record.diaper.dto.DiaperResDto;
import com.fa.sonagi.statistics.diaper.dto.DiaperStatisticsQueryDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

import static com.fa.sonagi.record.diaper.entity.QPoop.poop;

@RequiredArgsConstructor
public class PoopRepositoryImpl implements PoopRepositoryCustom{

	private final JPAQueryFactory queryFactory;

	@Override
	public DiaperResDto findPoopRecord(Long poopId) {
		DiaperResDto poops = queryFactory
			.select(Projections.bean(DiaperResDto.class,
				poop.id.as("diaperId"),
				poop.createdTime,
				poop.memo))
			.from(poop)
			.where(poop.id.eq(poopId))
			.fetchOne();

		return poops;
	}


	@Override
	public List<DiaperStatisticsQueryDto> findPoopByDay(Long babyId, LocalDate createdDate) {
		List<DiaperStatisticsQueryDto> diaperStatisticsQueryDto = queryFactory
			.select(Projections.bean(DiaperStatisticsQueryDto.class,
				poop.createdTime))
			.from(poop)
			.where(poop.babyId.eq(babyId), poop.createdDate.eq(createdDate))
			.fetch();

		return diaperStatisticsQueryDto;
	}

	@Override
	public Long findPoopCnt(Long babyId, LocalDate createdDate) {
		Long cnt = queryFactory
			.select(poop.count())
			.from(poop)
			.where(poop.babyId.eq(babyId), poop.createdDate.eq(createdDate))
			.fetchFirst();

		return cnt;
	}

	@Override
	public Map<LocalDate, List<LocalTime>> findPoopForWeek(Long babyId, LocalDate monday, LocalDate sunday) {
		List<StatisticsTime> poops = queryFactory
			.select(Projections.bean(StatisticsTime.class,
				poop.createdDate,
				poop.createdTime))
			.from(poop)
			.where(poop.babyId.eq(babyId),
				poop.createdDate.goe(monday), poop.createdDate.loe(sunday))
			.fetch();

		return poops.stream()
			.collect(Collectors.groupingBy(p -> p.getCreatedDate(),
				Collectors.mapping(StatisticsTime::getCreatedTime, Collectors.toList())));
	}

	@Override
	public Long findPoopCntByWeek(Long babyId, LocalDate monday, LocalDate sunday) {
		Long cnt = queryFactory
			.select(poop.count())
			.from(poop)
			.where(poop.babyId.eq(babyId),
				poop.createdDate.goe(monday), poop.createdDate.loe(sunday))
			.fetchFirst();

		return cnt;
	}
}
