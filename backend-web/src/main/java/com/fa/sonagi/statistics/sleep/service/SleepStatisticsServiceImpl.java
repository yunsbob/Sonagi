package com.fa.sonagi.statistics.sleep.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.sleep.repository.SleepRepository;
import com.fa.sonagi.statistics.sleep.dto.SleepStatisticsQueryDto;
import com.fa.sonagi.statistics.sleep.dto.SleepStatisticsResDto;
import com.fa.sonagi.statistics.sleep.dto.SleepStatisticsWeekResDto;

import lombok.RequiredArgsConstructor;
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class SleepStatisticsServiceImpl implements SleepStatisticsService{

	private final SleepRepository sleepRepository;
	private final int WEEK = 7;

	/**
	 * 일별 통계 계산
	 */
	@Override
	public SleepStatisticsResDto getSleepStatisticsDay(Long babyId, LocalDate createdDate) {
		SleepStatisticsResDto sleepStatisticsResDto = new SleepStatisticsResDto();

		// 데이터 조회
		List<SleepStatisticsQueryDto> sleeps = sleepRepository.findSleepByDay(babyId, createdDate);
		sleeps = cutNextTime(sleeps);

		createdDate = createdDate.minus(1, ChronoUnit.DAYS);

		// 전날 수면 데이터 조회
		List<SleepStatisticsQueryDto> yesterdaySleeps = sleepRepository.findSleepByDay(babyId, createdDate);
		yesterdaySleeps = cutNextTime(yesterdaySleeps);

		List<SleepStatisticsQueryDto> pastSleeps = sleepRepository.findSleepByDay(babyId, createdDate.minusDays(1));

		// 카드 통계
		Long sleepTime = sumSleepTime(sleeps);
		long cnt = sleeps.size();
		sleepStatisticsResDto.setSleeps(sleeps);
		sleepStatisticsResDto.setSleepCnt(cnt);
		sleepStatisticsResDto.setAllSleepHour(sleepTime / 60);
		sleepStatisticsResDto.setAllSleepMinute(sleepTime % 60);

		// 수면 횟수 통계 계산
		Long yesterdayCnt = (long)yesterdaySleeps.size();
		Long cntPercent = getPercent(cnt, yesterdayCnt);
		Long yesterdayCntPercent = getPercent(yesterdayCnt, cnt);
		sleepStatisticsResDto.setSleepCntPercent(cntPercent);
		sleepStatisticsResDto.setYesterdaySleepCntPercent(yesterdayCntPercent);

		// 수면 시간 통계 계산
		Long yesterdaySleepTime = sumSleepTime(yesterdaySleeps);
		Long timePercent = getPercent(sleepTime, yesterdaySleepTime);
		Long yesterdayTimePercent = getPercent(yesterdaySleepTime, sleepTime);
		sleepStatisticsResDto.setAllSleepPercent(timePercent);
		sleepStatisticsResDto.setYesterdayAllSleepPercent(yesterdayTimePercent);

		return sleepStatisticsResDto;
	}

	/**
	 * 주별 통계 계산
	 */
	@Override
	public SleepStatisticsWeekResDto getSleepStatisticsWeek(Long babyId, LocalDate createdDate) {
		return null;
	}

	/**
	 * 퍼센트 계산하기 Long
	 */
	public Long getPercent(Long target, Long opponent) {
		if (target == 0) return 0L;
		else if (target >= opponent) {
			return 100L;
		}
		else {
			return target * 100 / opponent;
		}
	}

	/**
	 * 다음날 시간 자르기 ex) 23:00 ~ 01:20 -> 23:00 ~ 23:59
	 */
	public List<SleepStatisticsQueryDto> cutNextTime(List<SleepStatisticsQueryDto> sleeps) {
		for (int i = 0; i < sleeps.size(); i++) {
			if (sleeps.get(i).getEndTime().isBefore(sleeps.get(i).getCreatedTime())) {
				sleeps.get(i).setEndTime(LocalTime.of(23, 59));
			}
		}

		return sleeps;
	}

	/**
	 * 전날 시간 추가하기 ex) 23:00 ~ 01:20 -> 00:00 ~ 01:20
	 */
	public List<SleepStatisticsQueryDto> plusPrevTime(List<SleepStatisticsQueryDto> sleeps) {
		for (int i = 0; i < sleeps.size(); i++) {
			if (sleeps.get(i).getEndTime().isBefore(sleeps.get(i).getCreatedTime())) {
				sleeps.get(i).setCreatedTime(LocalTime.of(0, 0));
			}
		}

		return sleeps;
	}

	/**
	 * 총 시간 계산
	 */
	public Long sumSleepTime(List<SleepStatisticsQueryDto> sleeps) {
		Long sleepTime = 0L;

		for (int i = 0; i < sleeps.size(); i++) {
			long startTime = sleeps.get(i).getCreatedTime().getHour() * 60 + sleeps.get(i).getCreatedTime().getMinute();
			long endTime = sleeps.get(i).getEndTime().getHour() * 60 + sleeps.get(i).getEndTime().getMinute();
			long passTime = endTime - startTime;

			sleepTime += passTime;
		}

		return sleepTime;
	}
}
