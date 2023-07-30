package com.fa.sonagi.config;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.util.PatternMatchUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

@Component
@Slf4j
public class WebInterceptor implements HandlerInterceptor {

    private static final String[] ignoreList = {};
    private static final String[] adminList = {"/api/v1/admin"};

    // 컨트롤러의 메서드에 매핑된 특정 URI가 호출 됐을때 실행.
    // 사용자가 사용한 기능을 파악하기 위해 콘솔에 로그 남기는 인터셉터
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String requestURI = request.getRequestURI();
        // uri == 특정 값 (우리가 만든 api의 ) 일때 동작 방식을 만든다.
        // ex
        //if(requestURI.equals("/api/v1/login") && request.getMethod().equals("GET")) return true;
        return HandlerInterceptor.super.preHandle(request, response, handler);
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
    }

    private boolean checkList(String[] list, String requestURI) {
        return PatternMatchUtils.simpleMatch(list, requestURI);
    }
}
