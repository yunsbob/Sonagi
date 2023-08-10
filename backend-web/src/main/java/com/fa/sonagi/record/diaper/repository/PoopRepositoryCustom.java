package com.fa.sonagi.record.diaper.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Map;

import com.fa.sonagi.record.diaper.dto.DiaperResDto;
import com.fa.sonagi.statistics.diaper.dto.DiaperStatisticsQueryDto;

public interface PoopRepositoryCustom {

	DiaperResDto findPoopRecord(Long poopId);

	List<DiaperStatisticsQueryDto> findPoopByDay(Long babyId, LocalDate createdDate);

	Long findPoopCnt(Long babyId, LocalDate createdDate);

	Map<LocalDate, List<LocalTime>> findPoopForWeek(Long babyId, LocalDate monday, LocalDate sunday);

	Long findPoopCntByWeek(Long babyId, LocalDate monday, LocalDate sunday);
}
