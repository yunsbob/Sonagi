package com.fa.sonagi.user.service;

import org.springframework.http.ResponseEntity;

import com.fa.sonagi.user.dto.NameDto;

public interface UserService {

	void updateName(NameDto nameDto);

	NameDto findName(Long id);


	// 유저 로그아웃

	// ResponseEntity<?> logout(UserTestReqDto.Logout logout);

	// 유저 토큰 재발급.

	// ResponseEntity<?> reissue(UserTestReqDto.Reissue reissue);

	//

}
