package com.fa.sonagi.oauth.service;

import com.fa.sonagi.oauth.dto.OAuth2UserDto;
import com.fa.sonagi.oauth.entity.SocialType;
import com.fa.sonagi.user.entity.Role;
import com.fa.sonagi.user.entity.Users;
import com.fa.sonagi.user.repository.UserRepository;
import java.util.Collections;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class OAuth2UserService extends DefaultOAuth2UserService {
  private final UserRepository userRepository;

  @Override
  public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
    log.info("OAuth2 loadUser()");
    OAuth2User user = super.loadUser(userRequest);

    SocialType socialType = SocialType.valueOf(userRequest.getClientRegistration().getRegistrationId().toUpperCase());


  }

  private Users createUser(OAuth2UserDto userInfo, SocialType socialType) {
    Users user = Users.builder()
        .email(userInfo.getEmail())
        .name(userInfo.getName())
        .socialType(socialType.toString())
        .roles(Collections.singletonList(Role.ROLE_USER.name()))
        .build();

  }
}
