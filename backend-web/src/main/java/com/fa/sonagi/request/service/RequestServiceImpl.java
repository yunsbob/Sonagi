package com.fa.sonagi.request.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.request.dto.RequestPostDto;
import com.fa.sonagi.request.dto.RequestResDto;
import com.fa.sonagi.request.entity.Request;
import com.fa.sonagi.request.repository.RequestRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class RequestServiceImpl implements RequestService {
	private final RequestRepository requestRepository;

	/**
	 * 문의사항 조회
	 */
	@Override
	public RequestResDto findRequestById(Long id) {
		Request request = requestRepository.findById(id).orElseThrow();

		RequestResDto requestResDto = RequestResDto.builder()
			.id(request.getId())
			.userId(request.getUserId())
			.title(request.getTitle())
			.content(request.getContent())
			.createdAt(request.getCreatedAt())
			.build();
		return requestResDto;
	}

	/**
	 * 문의사항 등록
	 */
	@Override
	@Transactional
	public void registRequest(RequestPostDto requestPostDto) {
		Request request = Request.builder()
			.userId(requestPostDto.getUserId())
			.title(requestPostDto.getTitle())
			.content(requestPostDto.getContent())
			.createdAt(requestPostDto.getCreatedAt())
			.build();
		requestRepository.save(request);
	}
}
