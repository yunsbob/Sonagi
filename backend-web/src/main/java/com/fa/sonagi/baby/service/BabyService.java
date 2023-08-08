package com.fa.sonagi.baby.service;

import java.util.List;

import com.fa.sonagi.baby.dto.BabyCodePosDto;
import com.fa.sonagi.baby.dto.BabyCodeResDto;
import com.fa.sonagi.baby.dto.BabyDetailPutDto;
import com.fa.sonagi.baby.dto.BabyDetailResDto;
import com.fa.sonagi.baby.dto.BabyInfoPostDto;
import com.fa.sonagi.baby.dto.BabyInfoResDto;
import com.fa.sonagi.baby.dto.CoparentResDto;
import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.user.entity.Users;

public interface BabyService {
	void registBabyInfo(BabyInfoPostDto babyInfoPostDto);

	BabyCodeResDto getBabyCode(Long babyId);

	void registUserBaby(Users user, Baby baby, String authority);

	void registUserBabyByCode(BabyCodePosDto babyCodePosDto);

	void registCheckup(Baby baby);

	void registVaccination(Baby baby);

	List<BabyInfoResDto> findBabyListByUserId(Long userId);

	void updateBabyDetail(BabyDetailPutDto babyDetailPutDto);

	BabyDetailResDto findBabyDetail(Long babyId);

	List<CoparentResDto> findCoparentListByBabyId(Long babyId);
}
