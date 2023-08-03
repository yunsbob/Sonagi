package com.fa.sonagi.baby.service;

import java.util.Base64;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.baby.dto.BabyCodeResDto;
import com.fa.sonagi.baby.dto.BabyInfoPostDto;
import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.entity.UserBaby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.baby.repository.UserBabyRepository;
import com.fa.sonagi.user.entity.Users;
import com.fa.sonagi.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BabyServiceImpl implements BabyService {

	private final BabyRepository babyRepository;
	private final UserRepository userRepository;
	private final UserBabyRepository userBabyRepository;

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

		registUserBaby(babyInfoPostDto.getUserId(), baby, "Y");
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

	/**
	 * 아기 코드 조회
	 */
	@Override
	public BabyCodeResDto getBabyCode(Long babyId) {
		BabyCodeResDto babyCodeResDto = babyRepository.findBabyCodeByBabyId(babyId);
		return babyCodeResDto;
	}

	/**
	 * 아기의 아이디랑 유저 아이디 매칭해서 UserBaby 생성
	 */
	@Override
	public void registUserBaby(Long userId, Baby baby, String authority) {
		Users user = userRepository.findById(userId).orElseThrow();

		UserBaby userBaby = UserBaby.builder()
			.user(user)
			.baby(baby)
			.authority(authority)
			.build();

		userBabyRepository.save(userBaby);
	}
}
