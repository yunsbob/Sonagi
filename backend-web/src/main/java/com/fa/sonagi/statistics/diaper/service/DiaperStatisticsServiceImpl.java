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
		Integer peeCnt = Integer.parseInt(String.valueOf(findPeeCnt(babyId, createdDate)));
		diaperStatisticsResDto.setPeeCnt(peeCnt);
		Integer poopCnt = Integer.parseInt(String.valueOf(findPoopCnt(babyId, createdDate)));
		diaperStatisticsResDto.setPoopCnt(poopCnt);

		createdDate = createdDate.minus(1, ChronoUnit.DAYS);

		Integer yesterdayPeeCnt = Integer.parseInt(String.valueOf(findPeeCnt(babyId, createdDate)));
		Integer yesterdayPoopCnt = Integer.parseInt(String.valueOf(findPoopCnt(babyId, createdDate)));

		Integer peePercent, poopPercent, yesterdayPeePercent, yesterdayPoopPercent;
		if (peeCnt >= yesterdayPeeCnt) {
			if (peeCnt == 0) peePercent = 0;
			else peePercent = 100;
			if (yesterdayPeeCnt == 0) yesterdayPeePercent = 0;
			else yesterdayPeePercent = yesterdayPeeCnt * 100 / peeCnt;
		}
		else {
			yesterdayPeePercent = 100;
			if (peeCnt == 0) peePercent = 0;
			else peePercent = peeCnt * 100 / yesterdayPeeCnt;
		}
		if (poopCnt >= yesterdayPoopCnt) {
			if (poopCnt == 0) poopPercent = 0;
			else poopPercent = 100;
			if (yesterdayPoopCnt == 0) yesterdayPoopPercent = 0;
			else yesterdayPoopPercent = yesterdayPoopCnt * 100 / poopCnt;
		}
		else {
			yesterdayPoopPercent = 100;
			if (poopCnt == 0) poopPercent = 0;
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
		List<DiaperStatisticsQueryDto> pees = peeRepository.findPeeByDay(babyId, createdDate);
		return pees;
	}

	@Override
	public List<DiaperStatisticsQueryDto> findPoops(Long babyId, LocalDate createdDate) {
		List<DiaperStatisticsQueryDto> poops = poopRepository.findPoopByDay(babyId, createdDate);
		return poops;
	}

	@Override
	public Long findPeeCnt(Long babyId, LocalDate createdDate) {
		Long peeCnt = peeRepository.findPeeCnt(babyId, createdDate);
		return peeCnt;
	}

	@Override
	public Long findPoopCnt(Long babyId, LocalDate createdDate) {
		Long poopCnt = poopRepository.findPoopCnt(babyId, createdDate);
		return poopCnt;
	}
}
