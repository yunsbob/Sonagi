package com.fa.sonagi.record.pumpingBreast.repository;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.pumpingBreast.dto.PumpingBreastResDto;
import com.fa.sonagi.statistics.pumpingBreast.dto.PumpingBreastStatisticsQueryDto;

public interface PumpingBreastRepositoryCutom {
	PumpingBreastResDto findPumpingBreastRecord(Long pumpingBreastId);

	List<PumpingBreastStatisticsQueryDto> findPumpingBreastByDay(Long babyId, LocalDate createdDate);

	Long findPumpingBreastCnt(Long babyId, LocalDate createdDate);

	Long findPumpingBreastAmount(Long babyId, LocalDate createdDate);
}
