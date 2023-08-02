package com.fa.sonagi.user.service;

import org.springframework.http.ResponseEntity;

public interface UserService {
	boolean checkEmail(String email) throws Exception;

	ResponseEntity<?> getUserInfo(String email);

	void updateNickname(String email, String nickname) throws Exception;

	// 재발급 로직 필요함.
	// ResponseEntity<?> reissue(UserTestReqDto.Reissue reissue);
}
