package com.fa.sonagi.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
//public class SecurityConfig extends WebSecurityConfiguration {
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .formLogin().disable() // form 로그인 사용 X
                .httpBasic().disable() // 기본 설정된 것, JWT 토큰 사용할 거면 필요 없어서 disable
                .csrf().disable() // 보안 기능, JWT랑 OAuth 쓰면 필요 없음
                .headers().frameOptions().disable() // h2 콘솔 접근 가능(필요 없으면 빼도 됨)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 세션 사용 X
                .and()
                .authorizeHttpRequests(request -> request
                        // 여기에 적은 경로만 접근 가능
                        // 사용자에 따라 접근 권한인데 필요 없으면 그냥 permitAll()로 해도 됨
//                        .requestMatchers("/login/**").hasAuthority("USER")
//                        .requestMatchers("/admin/**").permitAll()
                        .requestMatchers("/login/**").permitAll()
                        .requestMatchers("/swagger-ui.html").permitAll()
                        .anyRequest().authenticated()) // 위 경로 제외 모든 요청에 인증 필요
                .oauth2Login()

                // 성공 실패 handler
//                .successHandler(oAuth2LoginSuccessHandler)
//                .failureHandler(oAuth2LoginFailureHandler)
//                .userInfoEndpoint().userService(서비스명) // userService 설정
                .and()
                .logout().logoutUrl("/logout"); // 로그아웃 없으면 빼도 됨

        return http.getOrBuild();
    }
    // handler
//    @Bean
//    public LoginSuccessHandler loginSuccessHandler() {
//        return new LoginSuccessHandler(jwtService, userRepository);
//    }
//
//    @Bean
//    public LoginFailureHandler loginFailureHandler() {
//        return new LoginFailureHandler();
//    }
}