package com.fa.sonagi.user.service;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.jwt.JwtTokenProvider;
import com.fa.sonagi.user.dto.FCMTokenDto;
import com.fa.sonagi.user.dto.NameDto;
import com.fa.sonagi.user.dto.NotificationDto;
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
		Users user = userRepository.findById(nameDto.getUserId()).orElseThrow();
		user.updateName(nameDto.getName());
	}

	/**
	 * 사용자 이름 조회
	 */
	@Override
	public NameDto findName(Long userId) {
		return userRepository.findName(userId);
	}

	/**
	 * FCM 토큰 업데이트
	 */
	@Override
	@Transactional
	public void updateFCMToken(FCMTokenDto fcmTokenDto) {
		Users user = userRepository.findById(fcmTokenDto.getUserId()).orElseThrow();
		user.updateFCMToken(fcmTokenDto.getFirebaseToken());
	}

	/**
	 * 알림 조회
	 */
	@Override
	public NotificationDto findNotification(Long userId) {
		Users user = userRepository.findById(userId).orElseThrow();

		return NotificationDto.builder()
		                      .userId(userId)
		                      .vAlarm(user.getVAlarm())
		                      .cAlarm(user.getCAlarm())
		                      .dAlarm(user.getDAlarm())
		                      .mAlarm(user.getMAlarm())
		                      .build();
	}

	/**
	 * 접종 알림 수정
	 */
	@Override
	@Transactional
	public void updateVAlarm(Long userId, String vAlarm) {
		Users user = userRepository.findById(userId).orElseThrow();
		user.updateVAlarm(vAlarm);
	}

	/**
	 * 식사 알림 수정
	 */
	@Override
	@Transactional
	public void updateMAlarm(Long userId, String mAlarm) {
		Users user = userRepository.findById(userId).orElseThrow();
		user.updateMAlarm(mAlarm);
	}

	/**
	 * 일기 알림 수정
	 */
	@Override
	@Transactional
	public void updateDAlarm(Long userId, String dAlarm) {
		Users user = userRepository.findById(userId).orElseThrow();
		user.updateDAlarm(dAlarm);
	}

	/**
	 * 검진 알림 수정
	 */
	@Override
	@Transactional
	public void updateCAlarm(Long userId, String cAlarm) {
		Users user = userRepository.findById(userId).orElseThrow();
		user.updateCAlarm(cAlarm);
	}
}
