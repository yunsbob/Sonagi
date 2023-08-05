package com.fa.sonagi.statistics.sleep.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.sleep.repository.SleepRepository;
import com.fa.sonagi.statistics.sleep.dto.SleepStatisticsQueryDto;

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
	public void getSleepStatisticsDay(Long babyId, LocalDate createdDate) {

		// 데이터 조회
		List<SleepStatisticsQueryDto> sleeps = findSleeps(babyId, createdDate);
		for (int i = 0; i < sleeps.size(); i++) {
			sleeps.get(i).getCreatedTime().getTime();
		}
	}

	/**
	 * 수면 일별 데이터 조회
	 */
	@Override
	public List<SleepStatisticsQueryDto> findSleeps(Long babyId, LocalDate createdDate) {
		return sleepRepository.findSleepByDay(babyId, createdDate);
	}
}
