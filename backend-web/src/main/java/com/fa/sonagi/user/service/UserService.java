package com.fa.sonagi.user.service;

import org.springframework.http.ResponseEntity;

import com.fa.sonagi.user.dto.NameDto;

public interface UserService {
	boolean checkEmail(String email) throws Exception;

	ResponseEntity<?> getUserInfo(String email);

	void updateName(NameDto nameDto);

	NameDto findName(Long id);

	// ResponseEntity<?> logout(UserTestReqDto.Logout logout);
	//
	// ResponseEntity<?> reissue(UserTestReqDto.Reissue reissue);
}
