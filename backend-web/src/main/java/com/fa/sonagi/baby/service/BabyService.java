package com.fa.sonagi.baby.service;

import com.fa.sonagi.baby.dto.BabyInfoPostDto;

public interface BabyService {
	void registBabyInfo(BabyInfoPostDto babyInfoPostDto);

	String createBabyCode(Long UserId, Long babyId);

	String getBabyCode(Long babyId);


}
