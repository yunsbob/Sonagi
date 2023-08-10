package com.fa.sonagi.statistics.sleep.service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.sleep.repository.SleepRepository;
import com.fa.sonagi.statistics.sleep.dto.SleepStatisticsQueryDto;
import com.fa.sonagi.statistics.sleep.dto.SleepStatisticsResDto;

import lombok.RequiredArgsConstructor;
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class SleepStatisticsServiceImpl implements SleepStatisticsService{

	private final SleepRepository sleepRepository;

	/**
	 * 수면 통계 계산
	 */
	@Override
	public SleepStatisticsResDto getSleepStatisticsDay(Long babyId, LocalDate createdDate) {
		SleepStatisticsResDto sleepStatisticsResDto = new SleepStatisticsResDto();

		// 데이터 조회
		List<SleepStatisticsQueryDto> sleeps = findSleeps(babyId, createdDate);

		Long sleepTime = 0L;
		for (int i = 0; i < sleeps.size(); i++) {
			long startTime = sleeps.get(i).getCreatedTime().getTime() / 1000 / 60;
			long endTime = sleeps.get(i).getEndTime().getTime() / 1000 / 60;
			long passTime = endTime - startTime;

			sleepTime += passTime;
		}

		long cnt = sleeps.size();
		sleepStatisticsResDto.setSleeps(sleeps);
		sleepStatisticsResDto.setSleepCnt(cnt);
		sleepStatisticsResDto.setAllSleepHour(sleepTime / 60);
		sleepStatisticsResDto.setAllSleepMinute(sleepTime % 60);

		createdDate = createdDate.minus(1, ChronoUnit.DAYS);

		List<SleepStatisticsQueryDto> yesterdaySleeps = findSleeps(babyId, createdDate);

		Long yesterdaySleepTime = 0L;
		for (int i = 0; i < yesterdaySleeps.size(); i++) {
			long startTime = yesterdaySleeps.get(i).getCreatedTime().getTime() / 1000 / 60;
			long endTime = yesterdaySleeps.get(i).getEndTime().getTime() / 1000 / 60;
			long passTime = endTime - startTime;

			yesterdaySleepTime += passTime;
		}

		long yesterdayCnt = yesterdaySleeps.size();

		Long cntPercent, timePercent, yesterdayCntPercent, yesterdayTimePercent;
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
		sleepStatisticsResDto.setSleepCntPercent(cntPercent);
		sleepStatisticsResDto.setYesterdaySleepCntPercent(yesterdayCntPercent);

		if (sleepTime >= yesterdaySleepTime) {
			if (sleepTime == 0)
				timePercent = 0L;
			else
				timePercent = 100L;
			if (yesterdaySleepTime == 0)
				yesterdayTimePercent = 0L;
			else
				yesterdayTimePercent = yesterdaySleepTime * 100 / sleepTime;
		} else {
			yesterdayTimePercent = 0L;
			if (sleepTime == 0)
				timePercent = 0L;
			else
				timePercent = sleepTime * 100 / yesterdaySleepTime;
		}
		sleepStatisticsResDto.setAllSleepPercent(timePercent);
		sleepStatisticsResDto.setYesterdayAllSleepPercent(yesterdayTimePercent);

		return sleepStatisticsResDto;
	}

	/**
	 * 수면 일별 데이터 조회
	 */
	@Override
	public List<SleepStatisticsQueryDto> findSleeps(Long babyId, LocalDate createdDate) {
		return sleepRepository.findSleepByDay(babyId, createdDate);
	}
}
