package com.fa.sonagi.record.sleep.service;

import com.fa.sonagi.record.sleep.dto.SleepsPostDto;
import com.fa.sonagi.record.sleep.dto.SleepsPutDto;
import com.fa.sonagi.record.sleep.entity.Sleeps;

public interface SleepsService {
	Sleeps findSleepsById(Long id);

	void registSleeps(SleepsPostDto sleepsPostDto);

	void updateSleeps(SleepsPutDto sleepsPutDto);

	void deleteSleeps(Long id);
}
