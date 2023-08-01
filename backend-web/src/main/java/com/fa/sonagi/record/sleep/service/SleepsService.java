package com.fa.sonagi.record.sleep.service;

import com.fa.sonagi.record.sleep.dto.SleepsPostDto;
import com.fa.sonagi.record.sleep.dto.SleepsPutDto;
import com.fa.sonagi.record.sleep.dto.SleepsResDto;

public interface SleepsService {
	SleepsResDto findSleepsById(Long id);

	void registSleeps(SleepsPostDto sleepsPostDto);

	void updateSleeps(SleepsPutDto sleepsPutDto);

	void deleteSleeps(Long id);
}
