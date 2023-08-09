package com.fa.sonagi.user.service;

import com.fa.sonagi.user.dto.NameDto;

public interface UserService {

	void updateName(NameDto nameDto);

	NameDto findName(Long userId);
}
