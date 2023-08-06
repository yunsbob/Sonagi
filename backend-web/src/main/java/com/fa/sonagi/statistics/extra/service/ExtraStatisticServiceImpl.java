package com.fa.sonagi.statistics.extra.service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.extra.repository.ExtraRepository;
import com.fa.sonagi.statistics.extra.dto.ExtraStatisticsQueryDto;
import com.fa.sonagi.statistics.extra.dto.ExtraStatisticsResDto;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ExtraStatisticServiceImpl implements ExtraStatisticsService {

	private final ExtraRepository extraRepository;

	/**
	 * 기타 통계 계산
	 */
	@Override
	public ExtraStatisticsResDto getExtraStatisticsDay(Long babyId, LocalDate createdDate) {
		ExtraStatisticsResDto extraStatisticsResDto = new ExtraStatisticsResDto();

		List<ExtraStatisticsQueryDto> extras = findExtras(babyId, createdDate);
		Long extraCnt = (long)extras.size();
		extraStatisticsResDto.setCnt(extraCnt);

		createdDate = createdDate.minus(1, ChronoUnit.DAYS);

		Long yesterdayExtraCnt = findExtraCnt(babyId, createdDate);

		Long cntPercent, yesterdayCntPercent;

		if (extraCnt >= yesterdayExtraCnt) {
			if (extraCnt == 0)
				cntPercent = 0L;
			else
				cntPercent = 100L;
			if (yesterdayExtraCnt == 0)
				yesterdayCntPercent = 0L;
			else
				yesterdayCntPercent = yesterdayExtraCnt * 100 / extraCnt;
		} else {
			yesterdayCntPercent = 100L;
			if (extraCnt == 0)
				cntPercent = 0L;
			else
				cntPercent = extraCnt * 100 / yesterdayExtraCnt;
		}
		extraStatisticsResDto.setCntPercent(cntPercent);
		extraStatisticsResDto.setYesterdayCntPercent(yesterdayCntPercent);

		return extraStatisticsResDto;
	}

	/**
	 * 기타 일별 데이터 조회
	 */
	@Override
	public List<ExtraStatisticsQueryDto> findExtras(Long babyId, LocalDate createdDate) {
		return extraRepository.findExtraByDay(babyId, createdDate);
	}

	/**
	 * 기타 일별 횟수 조회
	 */
	@Override
	public Long findExtraCnt(Long babyId, LocalDate createdDate) {
		return extraRepository.findExtraCnt(babyId, createdDate);
	}
}
