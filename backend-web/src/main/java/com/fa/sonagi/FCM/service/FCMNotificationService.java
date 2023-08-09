package com.fa.sonagi.FCM.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fa.sonagi.user.entity.Users;
import com.fa.sonagi.user.repository.UserRepository;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class FCMNotificationService {
	private final FirebaseMessaging firebaseMessaging;
	private final UserRepository userRepository;

	public String sendNotificationByToken(Long userId, String title, String content) {
		Optional<Users> user = userRepository.findById(userId);
		if (user.isEmpty())
			return "user is not exist";

		if (user
			.get()
			.getFirebaseToken() != null) {
			Notification notification = Notification
				.builder()
				.setTitle(title)
				.setBody(content)
				// .setImage()
				.build();
			Message message = Message
				.builder()
				.putData("title", title)
				.putData("content", content)
				.setToken(user
					.get()
					.getFirebaseToken())
				.setNotification(notification)
				.build();
			try {
				firebaseMessaging.send(message);
				return "알림을 성공적으로 전송했습니다. targetUserId = " + userId;
			} catch (FirebaseMessagingException e) {
				e.printStackTrace();
				return "알림 보내기를 실패하였습니다. targetUserId = " + userId;
			}
		} else {
			return "서버에 저장된 유저의 Firebase Token이 존재하지 않습니다. targertUserId = " + userId;
		}

	}
}
