package com.fa.sonagi.memo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.memo.dto.MemoPostDto;
import com.fa.sonagi.memo.dto.MemoPutDto;
import com.fa.sonagi.memo.dto.MemoResDto;
import com.fa.sonagi.memo.entity.Caution;
import com.fa.sonagi.memo.repository.CautionRepository;
import com.fa.sonagi.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CautionServiceImpl implements CautionService {
	private final CautionRepository cautionRepository;
	private final UserRepository userRepository;

	/**
	 * 주의사항 메모 리스트 아이디로 조회
	 */
	@Override
	public List<MemoResDto> findCautionMemosByBabyId(Long babyId) {
		List<Caution> caution = cautionRepository.findByBabyId(babyId);
		return caution.stream()
			.map(c -> MemoResDto.builder()
				.id(c.getId())
				.userId(c.getUserId())
				.name(userRepository.findName(c.getUserId()).getName())
				.memo(c.getMemo())
				.build())
			.collect(Collectors.toList());
	}

	/**
	 * 주의사항 메모 아이디로 조회
	 */
	@Override
	public MemoResDto findCautionById(Long id) {
		Caution caution = cautionRepository.findById(id).orElseThrow();

		MemoResDto memoResDto = MemoResDto.builder()
			.id(caution.getId())
			.userId(caution.getUserId())
			.name(userRepository.findName(caution.getUserId()).getName())
			.memo(caution.getMemo())
			.build();
		return memoResDto;
	}

	/**
	 * 주의사항 메모 아이디로 등록
	 */
	@Override
	@Transactional
	public void registCaution(MemoPostDto memoPostDto) {
		Caution caution = Caution.builder()
			.babyId(memoPostDto.getBabyId())
			.userId(memoPostDto.getUserId())
			.memo(memoPostDto.getMemo())
			.build();

		cautionRepository.save(caution);
	}

	/**
	 * 주의사항 메모 아이디로 수정
	 */
	@Override
	@Transactional
	public void updateCaution(MemoPutDto memoPutDto) {
		Caution caution = cautionRepository.findById(memoPutDto.getId()).orElseThrow();
		caution.updateCaution(memoPutDto.getMemo());
	}

	/**
	 * 주의사항 메모 아이디로 삭제
	 */
	@Override
	@Transactional
	public void deleteCaution(Long id) {
		Caution caution = cautionRepository.findById(id).orElseThrow();
		cautionRepository.delete(caution);
	}
}
