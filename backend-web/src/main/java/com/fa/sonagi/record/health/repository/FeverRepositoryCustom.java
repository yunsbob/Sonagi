package com.fa.sonagi.record.health.repository;

import java.time.LocalDate;

import com.fa.sonagi.record.health.dto.FeverResDto;

public interface FeverRepositoryCustom {
	FeverResDto findFeverRecord(Long feverId);

	Double findFeverAvgByDay(Long babyId, LocalDate createdDate);
}
