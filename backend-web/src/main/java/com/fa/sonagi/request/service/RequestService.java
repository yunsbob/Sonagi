package com.fa.sonagi.request.service;

import com.fa.sonagi.request.dto.RequestPostDto;
import com.fa.sonagi.request.dto.RequestResDto;

public interface RequestService {
	RequestResDto findRequestById(Long id);

	void registRequest(RequestPostDto requestPostDto);
}
