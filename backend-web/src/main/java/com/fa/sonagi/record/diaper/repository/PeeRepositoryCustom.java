package com.fa.sonagi.record.diaper.repository;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.diaper.dto.DiaperResDto;
import com.fa.sonagi.statistics.diaper.dto.DiaperStatisticsQueryDto;

public interface PeeRepositoryCustom {

	DiaperResDto findPeeRecord(Long peeId);

	List<DiaperStatisticsQueryDto> findPeeByDay(Long babyId, LocalDate createdDate);

	Long findPeeCnt(Long babyId, LocalDate createdDate);
}
