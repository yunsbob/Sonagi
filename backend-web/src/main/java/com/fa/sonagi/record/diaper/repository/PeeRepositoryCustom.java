package com.fa.sonagi.record.diaper.repository;

import com.fa.sonagi.record.diaper.dto.DiaperResDto;

public interface PeeRepositoryCustom {
	DiaperResDto findPeeRecord(Long peeId);
}
