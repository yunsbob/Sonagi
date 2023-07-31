package com.fa.sonagi.record.sleep.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.sleep.dto.SleepsPostDto;
import com.fa.sonagi.record.sleep.dto.SleepsPutDto;
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
	public Sleeps findSleepsById(Long id) {
		return sleepsRepository.findById(id).orElseThrow();
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
		Sleeps sleeps = findSleepsById(sleepsPutDto.getId());
		sleeps.updateSleeps(sleepsPutDto.getCreatedTime(), sleepsPutDto.getEndTime(), sleepsPutDto.getMemo());
	}

	/**
	 * 수면 기록 삭제
	 */
	@Override
	@Transactional
	public void deleteSleeps(Long id) {
		Sleeps sleeps = findSleepsById(id);
		sleepsRepository.delete(sleeps);
	}
}
