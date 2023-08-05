package com.fa.sonagi.baby.service;

import com.fa.sonagi.baby.dto.BabyCodePosDto;
import com.fa.sonagi.baby.dto.BabyCodeResDto;
import com.fa.sonagi.baby.dto.BabyInfoPostDto;
import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.user.entity.Users;

public interface BabyService {
	void registBabyInfo(BabyInfoPostDto babyInfoPostDto);

	String createBabyCode(Long userId, Long babyId);

	BabyCodeResDto getBabyCode(Long babyId);

	void registUserBaby(Users user, Baby baby, String authority);

	void registUserBabyByCode(BabyCodePosDto babyCodePosDto);

	void registCheckup(Baby baby);

	void registVaccination(Baby baby);
}
