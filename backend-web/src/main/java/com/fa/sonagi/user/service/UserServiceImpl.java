package com.fa.sonagi.user.service;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.jwt.JwtTokenProvider;
import com.fa.sonagi.user.dto.NameDto;
import com.fa.sonagi.user.entity.Users;
import com.fa.sonagi.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {
	private final UserRepository userRepository;
	private final JwtTokenProvider jwtTokenProvider;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	private final RedisTemplate<String, Object> redisTemplate;

	/**
	 * 사용자 이름 등록, 수정
	 */
	@Override
	@Transactional
	public void updateName(NameDto nameDto) {
		Users user = userRepository
			.findById(nameDto.getId())
			.orElseThrow();
		user.updateName(nameDto.getName());
	}

	/**
	 * 사용자 이름 조회
	 */
	@Override
	public NameDto findName(Long id) {
		return userRepository.findName(id);
	}

}
