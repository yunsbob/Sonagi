package com.fa.sonagi.record.diaper.repository;

import com.fa.sonagi.record.diaper.dto.DiaperResDto;

public interface PoopRepositoryCustom {
	DiaperResDto findPoopRecord(Long poopId);
}
