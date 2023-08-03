package com.fa.sonagi.record.health.repository;

import com.fa.sonagi.record.health.dto.FeverResDto;

public interface FeverRepositoryCustom {
	FeverResDto findFeverRecord(Long feverId);
}
