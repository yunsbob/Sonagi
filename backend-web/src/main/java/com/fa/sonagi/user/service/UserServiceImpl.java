package com.fa.sonagi.user.service;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.stereotype.Service;

import com.fa.sonagi.jwt.JwtTokenProvider;
import com.fa.sonagi.user.repository.UserRepository;
import com.fa.sonagi.user.service.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
	private final UserRepository userRepository;
	private final JwtTokenProvider jwtTokenProvider;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	private final RedisTemplate<String, String> redisTemplate;

	@Override
	public boolean checkEmail(String email) throws Exception {
		log.info("check email : {}", email);

		return userRepository.findByEmail(email).isPresent();
	}

	@Override
	public ResponseEntity<?> getUserInfo(String email) {
		return null;
	}

	@Override
	public void updateNickname(String email, String nickname) throws Exception {

	}
}
