package com.fa.sonagi.statistics.activity.service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.activity.repository.PlayRepository;
import com.fa.sonagi.record.activity.repository.TummytimeRepository;
import com.fa.sonagi.statistics.activity.dto.ActivityStatisticsQueryDto;
import com.fa.sonagi.statistics.activity.dto.ActivityStatisticsResDto;
import com.fa.sonagi.statistics.common.StatisticsTime;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ActivityStatisticsServiceImpl implements ActivityStatisticsService {

	private final PlayRepository playRepository;
	private final TummytimeRepository tummytimeRepository;

	/**
	 * 놀이 통계 계산
	 */
	@Override
	public ActivityStatisticsResDto getActivityStatisticsDay(Long babyId, LocalDate createdDate) {
		ActivityStatisticsResDto activityStatisticsResDto = new ActivityStatisticsResDto();

		List<ActivityStatisticsQueryDto> plays = findPlays(babyId, createdDate);

		Long activityTime = 0L;
		List<StatisticsTime> statisticsTimes = new ArrayList<>();
		for (int i = 0; i < plays.size(); i++) {
			long startTime = plays.get(i).getCreatedTime().getTime() / 1000 / 60;
			long endTime = plays.get(i).getEndTime().getTime() / 1000 / 60;
			long passTime = endTime - startTime;

			activityTime += passTime;
		}
		activityStatisticsResDto.setPlays(plays);

		List<ActivityStatisticsQueryDto> tummytimes = findTummytimes(babyId, createdDate);
		statisticsTimes = new ArrayList<>();
		for (int i = 0; i < tummytimes.size(); i++) {
			long startTime = tummytimes.get(i).getCreatedTime().getTime() / 1000 / 60;
			long endTime = tummytimes.get(i).getEndTime().getTime() / 1000 / 60;
			long passTime = endTime - startTime;

			activityTime += passTime;
		}
		activityStatisticsResDto.setTummytimes(tummytimes);

		long cnt = plays.size() + tummytimes.size();
		activityStatisticsResDto.setActivityCnt(cnt);
		activityStatisticsResDto.setActivityHour(activityTime / 60);
		activityStatisticsResDto.setActivityMinute(activityTime % 60);

		createdDate = createdDate.minus(1, ChronoUnit.DAYS);

		List<ActivityStatisticsQueryDto> yesterdayPlays = findPlays(babyId, createdDate);
		List<ActivityStatisticsQueryDto> yesterdayTummytimes = findTummytimes(babyId, createdDate);

		Long yesterdayActivityTime = 0L;
		for (int i = 0; i < yesterdayPlays.size(); i++) {
			long startTime = yesterdayPlays.get(i).getCreatedTime().getTime() / 1000 / 60;
			long endTime = yesterdayPlays.get(i).getEndTime().getTime() / 1000 / 60;
			long passTime = endTime - startTime;

			yesterdayActivityTime += passTime;
		}
		for (int i = 0; i < yesterdayTummytimes.size(); i++) {
			long startTime = yesterdayTummytimes.get(i).getCreatedTime().getTime() / 1000 / 60;
			long endTime = yesterdayTummytimes.get(i).getEndTime().getTime() / 1000 / 60;
			long passTime = endTime - startTime;

			yesterdayActivityTime += passTime;
		}

		long yesterdayCnt = yesterdayPlays.size() + yesterdayTummytimes.size();

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
		activityStatisticsResDto.setActivityCntPercent(cntPercent);
		activityStatisticsResDto.setYesterdayActivityCntPercent(yesterdayCntPercent);

		if (activityTime >= yesterdayActivityTime) {
			if (activityTime == 0)
				timePercent = 0L;
			else
				timePercent = 100L;
			if (yesterdayActivityTime == 0)
				yesterdayTimePercent = 0L;
			else
				yesterdayTimePercent = yesterdayActivityTime * 100 / activityTime;
		} else {
			yesterdayTimePercent = 0L;
			if (activityTime == 0)
				timePercent = 0L;
			else
				timePercent = activityTime * 100 / yesterdayActivityTime;
		}
		activityStatisticsResDto.setAllActivityPercent(timePercent);
		activityStatisticsResDto.setYesterdayAllActivityPercent(yesterdayTimePercent);

		return activityStatisticsResDto;
	}

	/**
	 * 놀이 일별 데이터 조회
	 */
	@Override
	public List<ActivityStatisticsQueryDto> findPlays(Long babyId, LocalDate createdDate) {
		return playRepository.findPlayByDay(babyId, createdDate);
	}

	/**
	 * 터미타임 일별 데이터 조회
	 */
	@Override
	public List<ActivityStatisticsQueryDto> findTummytimes(Long babyId, LocalDate createdDate) {
		return tummytimeRepository.findTummytimeByDay(babyId, createdDate);
	}
}
