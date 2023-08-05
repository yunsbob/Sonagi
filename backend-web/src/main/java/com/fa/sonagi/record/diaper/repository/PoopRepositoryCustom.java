package com.fa.sonagi.record.diaper.repository;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.diaper.dto.DiaperResDto;
import com.fa.sonagi.statistics.diaper.dto.DiaperStatisticsQueryDto;

public interface PoopRepositoryCustom {

	DiaperResDto findPoopRecord(Long poopId);

	List<DiaperStatisticsQueryDto> findPoopByDay(Long babyId, LocalDate createdDate);

	Long findPoopCnt(Long babyId, LocalDate createdDate);
}
