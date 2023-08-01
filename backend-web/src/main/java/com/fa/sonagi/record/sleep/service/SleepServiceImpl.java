package com.fa.sonagi.record.sleep.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.sleep.dto.SleepsPostDto;
import com.fa.sonagi.record.sleep.dto.SleepsPutDto;
import com.fa.sonagi.record.sleep.dto.SleepsResDto;
import com.fa.sonagi.record.sleep.entity.Sleeps;
import com.fa.sonagi.record.sleep.repository.SleepsRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class SleepServiceImpl implements SleepsService {
	private final SleepsRepository sleepsRepository;

	/**
	 * 수면 기록 아이디로 조회
	 */
	@Override
	public SleepsResDto findSleepsById(Long id) {
		Sleeps sleeps = sleepsRepository.findById(id).orElseThrow();

		SleepsResDto sleepsResDto = SleepsResDto.builder()
			.createdTime(sleeps.getCreatedTime())
			.endTime(sleeps.getEndTime())
			.memo(sleeps.getMemo())
			.build();
		return sleepsResDto;
	}

	/**
	 * 수면 기록 등록
	 */
	@Override
	@Transactional
	public void registSleeps(SleepsPostDto sleepsPostDto) {
		Sleeps sleeps = Sleeps.builder()
			.userId(sleepsPostDto.getUserId())
			.babyId(sleepsPostDto.getBabyId())
			.createdDate(sleepsPostDto.getCreatedDate())
			.createdTime(sleepsPostDto.getCreatedTime())
			.endTime(sleepsPostDto.getEndTime())
			.memo(sleepsPostDto.getMemo())
			.build();

		sleepsRepository.save(sleeps);
	}

	/**
	 * 수면 기록 수정
	 */
	@Override
	@Transactional
	public void updateSleeps(SleepsPutDto sleepsPutDto) {
		Sleeps sleeps = sleepsRepository.findById(sleepsPutDto.getId()).orElseThrow();
		sleeps.updateSleeps(sleepsPutDto.getCreatedTime(), sleepsPutDto.getEndTime(), sleepsPutDto.getMemo());
	}

	/**
	 * 수면 기록 삭제
	 */
	@Override
	@Transactional
	public void deleteSleeps(Long id) {
		Sleeps sleeps = sleepsRepository.findById(id).orElseThrow();
		sleepsRepository.delete(sleeps);
	}
}
