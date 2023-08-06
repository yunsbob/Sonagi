package com.fa.sonagi.statistics.extra.service;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.statistics.extra.dto.ExtraStatisticsQueryDto;
import com.fa.sonagi.statistics.extra.dto.ExtraStatisticsResDto;

public interface ExtraStatisticsService {

	ExtraStatisticsResDto getExtraStatisticsDay(Long babyId, LocalDate createdDate);

	List<ExtraStatisticsQueryDto> findExtras(Long babyId, LocalDate createdDate);

	Long findExtraCnt(Long babyId, LocalDate createdDate);
}
