package com.fa.sonagi.baby.service;

import java.util.Base64;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.baby.dto.BabyInfoPostDto;
import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BabyServiceImpl implements BabyService{

	private final BabyRepository babyRepository;

	/**
	 * 아기 정보 등록
	 */
	@Override
	@Transactional
	public void registBabyInfo(BabyInfoPostDto babyInfoPostDto) {
		Baby baby = Baby.builder()
			.birthDate(babyInfoPostDto.getBirthDate())
			.gender(babyInfoPostDto.getGender())
			.name(babyInfoPostDto.getName())
			.code(null)
			.lastMealTime(null)
			.lastDiaryTime(null)
			.deletedAt(null)
			.isDeleted("N")
			.build();

		babyRepository.save(baby);

		baby.updateCode(createBabyCode(babyInfoPostDto.getUserId(), baby.getId()));
	}

	/**
	 * 아기 정보 코드 생성
	 */
	@Override
	public String createBabyCode(Long userId, Long babyId) {
		String specialCode = userId + "angel" + babyId ;

		byte[] encodedBytes = Base64.getEncoder().encode(specialCode.getBytes());

		return new String(encodedBytes);
	}

	@Override
	public String getBabyCode(Long babyId) {
		return null;
	}
}
