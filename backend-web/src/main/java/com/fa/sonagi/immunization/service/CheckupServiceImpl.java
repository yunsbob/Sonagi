package com.fa.sonagi.immunization.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.immunization.dto.CheckupPutDto;
import com.fa.sonagi.immunization.dto.CheckupResDto;
import com.fa.sonagi.immunization.entity.CheckupStatus;
import com.fa.sonagi.immunization.repository.CheckupStatusRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CheckupServiceImpl implements CheckupService {
	private final CheckupStatusRepository checkupStatusRepository;
	private final BabyRepository babyRepository;

	/**
	 * 건강검진 상세 정보 조회
	 */
	@Override
	public CheckupResDto findCheckup(Long babyId, Long checkupId) {
		Optional<Baby> byId = babyRepository.findById(babyId);
		LocalDate birth = byId.get().getBirthDate();

		CheckupStatus checkupStatus = checkupStatusRepository.findByBabyIdAndCheckupId(babyId, checkupId);
		return CheckupResDto.builder()
			.id(checkupStatus.getId())
			.checkupId(checkupStatus.getCheckup().getId())
			.checkupName(checkupStatus.getCheckup().getCheckupName())
			.startDate(birth.plusDays(checkupStatus.getCheckup().getStartDate()))
			.endDate(birth.plusDays(checkupStatus.getCheckup().getEndDate()))
			.checkupDate(checkupStatus.getCheckupDate())
			.content(checkupStatus.getCheckup().getContent())
			.build();
	}

	/**
	 * 건강검진 리스트 조회
	 */
	@Override
	public List<CheckupResDto> findCheckupList(Long babyId) {
		Optional<Baby> byId = babyRepository.findById(babyId);
		LocalDate birth = byId.get().getBirthDate();

		List<CheckupStatus> checkupStatus = checkupStatusRepository.findByBabyId(babyId);
		List<CheckupResDto> checkupResDto = checkupStatus.stream()
			.map(c -> CheckupResDto.builder()
				.id(c.getId())
				.checkupId(c.getCheckup().getId())
				.checkupName(c.getCheckup().getCheckupName())
				.startDate(birth.plusDays(c.getCheckup().getStartDate()))
				.endDate(birth.plusDays(c.getCheckup().getEndDate()))
				.checkupDate(c.getCheckupDate())
				.content(c.getCheckup().getContent())
				.build())
			.collect(Collectors.toList());
		return checkupResDto;
	}

	/**
	 * 건강검진일 등록, 수정
	 */
	@Override
	@Transactional
	public void updateCheckupDate(CheckupPutDto checkupPutDto) {
		CheckupStatus checkupStatus = checkupStatusRepository.findById(checkupPutDto.getId()).orElseThrow();
		checkupStatus.updateCheckup(checkupPutDto.getCheckupDate());
	}
}
