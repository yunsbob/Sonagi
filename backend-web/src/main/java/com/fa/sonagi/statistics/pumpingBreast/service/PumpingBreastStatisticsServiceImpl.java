package com.fa.sonagi.statistics.pumpingBreast.service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.pumpingBreast.repository.PumpingBreastRepository;
import com.fa.sonagi.statistics.pumpingBreast.dto.PumpingBreastStatisticsResDto;
import com.fa.sonagi.statistics.pumpingBreast.dto.PumpingBreastStatisticsQueryDto;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PumpingBreastStatisticsServiceImpl implements PumpingBreastStatisticsService {

	private final PumpingBreastRepository pumpingBreastRepository;

	/**
	 * 일별 통계 계산
	 */
	@Override
	public PumpingBreastStatisticsResDto getPumpingBreastStatisticsDay(Long babyId, LocalDate createdDate) {
		PumpingBreastStatisticsResDto pumpingBreastStatisticsResDto = new PumpingBreastStatisticsResDto();

		List<PumpingBreastStatisticsQueryDto> pumpingBreasts = findPumpingBreasts(babyId, createdDate);
		pumpingBreastStatisticsResDto.setPumpingBreasts(pumpingBreasts);

		Long cnt = (long)pumpingBreasts.size();
		pumpingBreastStatisticsResDto.setCnt(cnt);

		Long amount = 0L;
		for (int i = 0; i < pumpingBreasts.size(); i++) {
			amount += pumpingBreasts.get(i).getAmount();
		}
		pumpingBreastStatisticsResDto.setAmount(amount);

		createdDate = createdDate.minus(1, ChronoUnit.DAYS);

		Long yesterdayCnt = findPumpingBreastCnt(babyId, createdDate);

		Long cntPercent, amountPercent, yesterdayCntPercent, yesterdayAmountPercent;

		if (cnt >= yesterdayCnt) {
			if (cnt == 0)
				cntPercent = 0L;
			else
				cntPercent = 100L;
			if (yesterdayCnt == 0)
				yesterdayCntPercent = 0L;
			else
				yesterdayCntPercent = yesterdayCnt * 100 / cnt;
		} else {
			yesterdayCntPercent = 100L;
			if (cnt == 0)
				cntPercent = 0L;
			else
				cntPercent = cnt * 100 / yesterdayCnt;
		}
		pumpingBreastStatisticsResDto.setCntPercent(cntPercent);
		pumpingBreastStatisticsResDto.setYesterdayCntPercent(yesterdayCntPercent);

		Long yesterdayAmount = findPumpingBreastAmount(babyId, createdDate);
		if (amount >= yesterdayAmount) {
			if (amount == 0)
				amountPercent = 0L;
			else
				amountPercent = 100L;
			if (yesterdayAmount == 0)
				yesterdayAmountPercent = 0L;
			else
				yesterdayAmountPercent = yesterdayAmount * 100 / amount;
		} else {
			yesterdayAmountPercent = 100L;
			if (cnt == 0)
				amountPercent = 0L;
			else
				amountPercent = amount * 100 / yesterdayAmount;
		}
		pumpingBreastStatisticsResDto.setAmountPercent(amountPercent);
		pumpingBreastStatisticsResDto.setYesterdayAmountPercent(yesterdayAmountPercent);

		return pumpingBreastStatisticsResDto;
	}

	/**
	 * 유축 일별 데이터 조회
	 */
	@Override
	public List<PumpingBreastStatisticsQueryDto> findPumpingBreasts(Long babyId, LocalDate createdDate) {
		return pumpingBreastRepository.findPumpingBreastByDay(babyId, createdDate);
	}

	/**
	 * 유축 일별 횟수 조회
	 */
	@Override
	public Long findPumpingBreastCnt(Long babyId, LocalDate createdDate) {
		return pumpingBreastRepository.findPumpingBreastCnt(babyId, createdDate);
	}

	/**
	 * 유축 일별 용량 조회
	 */
	@Override
	public Long findPumpingBreastAmount(Long babyId, LocalDate createdDate) {
		return pumpingBreastRepository.findPumpingBreastAmount(babyId, createdDate);
	}
}
