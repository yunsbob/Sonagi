package com.fa.sonagi.statistics.pumpingBreast.service;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.statistics.pumpingBreast.dto.PumpingBreastStatisticsQueryDto;
import com.fa.sonagi.statistics.pumpingBreast.dto.PumpingBreastStatisticsResDto;

public interface PumpingBreastStatisticsService {

	PumpingBreastStatisticsResDto getPumpingBreastStatisticsDay(Long babyId, LocalDate createdDate);

	List<PumpingBreastStatisticsQueryDto> findPumpingBreasts(Long babyId, LocalDate createdDate);

	Long findPumpingBreastCnt(Long babyId, LocalDate createdDate);

	Long findPumpingBreastAmount(Long babyId, LocalDate createdDate);
}
