package com.fa.sonagi.statistics.diaper.service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.diaper.repository.PeeRepository;
import com.fa.sonagi.record.diaper.repository.PoopRepository;
import com.fa.sonagi.statistics.diaper.dto.DiaperStatisticsQueryDto;
import com.fa.sonagi.statistics.diaper.dto.DiaperStatisticsResDto;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class DiaperStatisticsServiceImpl implements DiaperStatisticsService{

	private final PeeRepository peeRepository;
	private final PoopRepository poopRepository;

	@Override
	public DiaperStatisticsResDto getDiaperStatisticsDay(Long babyId, LocalDate createdDate) {
		DiaperStatisticsResDto diaperStatisticsResDto = new DiaperStatisticsResDto();

		List<DiaperStatisticsQueryDto> pees = findPees(babyId, createdDate);
		diaperStatisticsResDto.setPees(pees);
		List<DiaperStatisticsQueryDto> poops = findPoops(babyId, createdDate);
		diaperStatisticsResDto.setPoops(poops);
		Long peeCnt = findPeeCnt(babyId, createdDate);
		diaperStatisticsResDto.setPeeCnt(peeCnt);
		Long poopCnt = findPoopCnt(babyId, createdDate);
		diaperStatisticsResDto.setPoopCnt(poopCnt);

		createdDate = createdDate.minus(1, ChronoUnit.DAYS);

		Long yesterdayPeeCnt = findPeeCnt(babyId, createdDate);
		Long yesterdayPoopCnt = findPoopCnt(babyId, createdDate);

		Long peePercent, poopPercent, yesterdayPeePercent, yesterdayPoopPercent;
		if (peeCnt >= yesterdayPeeCnt) {
			if (peeCnt == 0) peePercent = 0L;
			else peePercent = 100L;
			if (yesterdayPeeCnt == 0) yesterdayPeePercent = 0L;
			else yesterdayPeePercent = yesterdayPeeCnt * 100 / peeCnt;
		}
		else {
			yesterdayPeePercent = 100L;
			if (peeCnt == 0) peePercent = 0L;
			else peePercent = peeCnt * 100 / yesterdayPeeCnt;
		}
		if (poopCnt >= yesterdayPoopCnt) {
			if (poopCnt == 0) poopPercent = 0L;
			else poopPercent = 100L;
			if (yesterdayPoopCnt == 0) yesterdayPoopPercent = 0L;
			else yesterdayPoopPercent = yesterdayPoopCnt * 100 / poopCnt;
		}
		else {
			yesterdayPoopPercent = 100L;
			if (poopCnt == 0) poopPercent = 0L;
			else poopPercent = poopCnt * 100 / yesterdayPoopCnt;
		}

		diaperStatisticsResDto.setPeePercent(peePercent);
		diaperStatisticsResDto.setYesterdayPeePercent(yesterdayPeePercent);
		diaperStatisticsResDto.setPoopPercent(poopPercent);
		diaperStatisticsResDto.setYesterdayPoopPercent(yesterdayPoopPercent);

		return diaperStatisticsResDto;
	}

	@Override
	public List<DiaperStatisticsQueryDto> findPees(Long babyId, LocalDate createdDate) {
		return peeRepository.findPeeByDay(babyId, createdDate);
	}

	@Override
	public List<DiaperStatisticsQueryDto> findPoops(Long babyId, LocalDate createdDate) {
		return poopRepository.findPoopByDay(babyId, createdDate);
	}

	@Override
	public Long findPeeCnt(Long babyId, LocalDate createdDate) {
		return peeRepository.findPeeCnt(babyId, createdDate);
	}

	@Override
	public Long findPoopCnt(Long babyId, LocalDate createdDate) {
		return poopRepository.findPoopCnt(babyId, createdDate);
	}
}
