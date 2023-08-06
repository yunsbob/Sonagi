package com.fa.sonagi.baby.service;

import java.util.Base64;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.baby.dto.BabyCodePosDto;
import com.fa.sonagi.baby.dto.BabyCodeResDto;
import com.fa.sonagi.baby.dto.BabyInfoPostDto;
import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.entity.UserBaby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.baby.repository.UserBabyRepository;
import com.fa.sonagi.immunization.entity.Checkup;
import com.fa.sonagi.immunization.entity.CheckupStatus;
import com.fa.sonagi.immunization.entity.Vaccination;
import com.fa.sonagi.immunization.entity.VaccinationStatus;
import com.fa.sonagi.immunization.repository.CheckupRepository;
import com.fa.sonagi.immunization.repository.CheckupStatusRepository;
import com.fa.sonagi.immunization.repository.VaccinationRepository;
import com.fa.sonagi.immunization.repository.VaccinationStatusRepository;
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
	private final CheckupStatusRepository checkupStatusRepository;
	private final CheckupRepository checkupRepository;
	private final VaccinationStatusRepository vaccinationStatusRepository;
	private final VaccinationRepository vaccinationRepository;

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

		Users user = userRepository.findById(babyInfoPostDto.getUserId()).orElseThrow();
		registUserBaby(user, baby, "Y");
		registCheckup(baby);
		registVaccination(baby);
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
	 * 아기의 아이디랑 유저 아이디 매칭
	 */
	@Override
	public void registUserBaby(Users user, Baby baby, String authority) {

		UserBaby userBaby = UserBaby.builder()
			.user(user)
			.baby(baby)
			.authority(authority)
			.build();

		userBabyRepository.save(userBaby);
	}

	/**
	 * 아기 코드로 아기를 찾아 아기의 아이디랑 유저 아이디 매칭
	 */
	@Override
	@Transactional
	public void registUserBabyByCode(BabyCodePosDto babyCodePosDto) {
		Baby baby = babyRepository.findByCode(babyCodePosDto.getCode());
		Users user = userRepository.findById(babyCodePosDto.getUserId()).orElseThrow();

		registUserBaby(user, baby, "N");
	}

	/**
	 * CheckupStatus 생성
	 */
	@Override
	@Transactional
	public void registCheckup(Baby baby) {
		List<Checkup> checkups = checkupRepository.findAll();

		for (Checkup checkup : checkups) {
			CheckupStatus checkupStatus = CheckupStatus.builder()
				.baby(baby)
				.checkup(checkup)
				.build();
			checkupStatusRepository.save(checkupStatus);
		}

	}

	/**
	 * VaccinationStatus 생성
	 */
	@Override
	@Transactional
	public void registVaccination(Baby baby) {
		List<Vaccination> vaccinations = vaccinationRepository.findAll();

		for (Vaccination vaccination : vaccinations) {
			VaccinationStatus vaccinationStatus = VaccinationStatus.builder()
				.baby(baby)
				.vaccination(vaccination)
				.build();
			vaccinationStatusRepository.save(vaccinationStatus);
		}

	}
}
