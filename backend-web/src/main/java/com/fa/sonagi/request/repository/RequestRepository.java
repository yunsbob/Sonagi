package com.fa.sonagi.request.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.request.dto.RequestResDto;
import com.fa.sonagi.request.entity.Request;

public interface RequestRepository extends JpaRepository<Request, Long> {
	RequestResDto findRequestById(Long id);
}
