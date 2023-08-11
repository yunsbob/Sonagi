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
		int checkIdx = checkTime(sleeps);
		if (checkIdx != -1)
			sleeps.get(checkIdx).setEndTime(LocalTime.of(23,59));

		createdDate = createdDate.minus(1, ChronoUnit.DAYS);

		// 전날 수면 데이터 조회
		List<SleepStatisticsQueryDto> yesterdaySleeps = sleepRepository.findSleepByDay(babyId, createdDate);
		checkIdx = checkTime(yesterdaySleeps);
		if (checkIdx != -1) {
			SleepStatisticsQueryDto sleepStatisticsQueryDto = new SleepStatisticsQueryDto();
			sleepStatisticsQueryDto.setCreatedTime(yesterdaySleeps.get(checkIdx).getCreatedTime());
			sleepStatisticsQueryDto.setEndTime(yesterdaySleeps.get(checkIdx).getEndTime());
			sleepStatisticsQueryDto.setCreatedTime(LocalTime.of(0, 0));
			sleeps.add(sleepStatisticsQueryDto);
			yesterdaySleeps.get(checkIdx).setEndTime(LocalTime.of(23, 59));
		}

		List<SleepStatisticsQueryDto> pastSleeps = sleepRepository.findSleepByDay(babyId, createdDate.minusDays(1));
		checkIdx = checkTime(pastSleeps);
		if (checkIdx != -1) {
			yesterdaySleeps.add(pastSleeps.get(checkIdx));
			yesterdaySleeps.get(yesterdaySleeps.size() - 1).setCreatedTime(LocalTime.of(0, 0));
		}


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
	 * 오전 12시 기준으로 이전에 시작해서 이후에 끝나는 기록이 있는지 확인
	 */
	public int checkTime(List<SleepStatisticsQueryDto> sleeps) {
		for (int i = 0; i < sleeps.size(); i++) {
			if (sleeps.get(i).getEndTime().isBefore(sleeps.get(i).getCreatedTime())) {
				return i;
			}
		}
		return -1;
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
