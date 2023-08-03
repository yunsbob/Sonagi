package com.fa.sonagi.record.sleep.repository;

import com.fa.sonagi.record.sleep.dto.SleepResDto;

public interface SleepRepositoryCustom {
	SleepResDto findSleepRecord(Long sleepId);
}
