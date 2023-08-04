package com.fa.sonagi.statistics.diaper.service;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.statistics.diaper.dto.DiaperStatisticsQueryDto;
import com.fa.sonagi.statistics.diaper.dto.DiaperStatisticsResDto;

public interface DiaperStatisticsService {

	DiaperStatisticsResDto getDiaperStatisticsDay(Long babyId, LocalDate createdDate);

	List<DiaperStatisticsQueryDto> findPees(Long babyId, LocalDate createdDate);

	List<DiaperStatisticsQueryDto> findPoops(Long babyId, LocalDate createdDate);

	Long findPeeCnt(Long babyId, LocalDate createdDate);

	Long findPoopCnt(Long babyId, LocalDate createdDate);
}
