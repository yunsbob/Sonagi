package com.fa.sonagi.memo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.memo.dto.MemoPostDto;
import com.fa.sonagi.memo.dto.MemoPutDto;
import com.fa.sonagi.memo.dto.MemoResDto;
import com.fa.sonagi.memo.entity.Illness;
import com.fa.sonagi.memo.repository.IllnessRepository;
import com.fa.sonagi.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class IllnessServiceImpl implements IllnessService {
	private final IllnessRepository illnessRepository;
	private final UserRepository userRepository;

	/**
	 * 질병 메모 리스트 아이디로 조회
	 */
	@Override
	public List<MemoResDto> findIllnessMemosByBabyId(Long babyId) {
		List<Illness> allIllness = illnessRepository.findByBabyId(babyId);
		return allIllness.stream()
			.map(i -> MemoResDto.builder()
				.id(i.getId())
				.userId(i.getUserId())
				.name(userRepository.findName(i.getUserId()).getName())
				.memo(i.getMemo())
				.build())
			.collect(Collectors.toList());
	}

	/**
	 * 질병 메모 아이디로 조회
	 */
	@Override
	public MemoResDto findIllnessById(Long id) {
		Illness illness = illnessRepository.findById(id).orElseThrow();

		MemoResDto memoResDto = MemoResDto.builder()
			.id(illness.getId())
			.userId(illness.getUserId())
			.name(userRepository.findName(illness.getUserId()).getName())
			.memo(illness.getMemo())
			.build();

		return memoResDto;
	}

	/**
	 * 질병 메모 아이디로 등록
	 */
	@Override
	@Transactional
	public void registIllness(MemoPostDto memoPostDto) {
		Illness illness = Illness.builder()
			.babyId(memoPostDto.getBabyId())
			.userId(memoPostDto.getUserId())
			.memo(memoPostDto.getMemo())
			.build();

		illnessRepository.save(illness);
	}

	/**
	 * 질병 메모 아이디로 수정
	 */
	@Override
	@Transactional
	public void updateIllness(MemoPutDto memoPutDto) {
		Illness illness = illnessRepository.findById(memoPutDto.getId()).orElseThrow();
		illness.updateIllness(memoPutDto.getMemo());
	}

	/**
	 * 질병 메모 아이디로 삭제
	 */
	@Override
	@Transactional
	public void deleteIllness(Long id) {
		Illness illness = illnessRepository.findById(id).orElseThrow();
		illnessRepository.delete(illness);
	}
}
