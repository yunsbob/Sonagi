package com.fa.sonagi.baby.service;

import com.fa.sonagi.baby.dto.BabyCodeResDto;
import com.fa.sonagi.baby.dto.BabyInfoPostDto;
import com.fa.sonagi.baby.entity.Baby;

public interface BabyService {
	void registBabyInfo(BabyInfoPostDto babyInfoPostDto);

	String createBabyCode(Long userId, Long babyId);

	BabyCodeResDto getBabyCode(Long babyId);

	void registUserBaby(Long userId, Baby baby, String authority);
}
