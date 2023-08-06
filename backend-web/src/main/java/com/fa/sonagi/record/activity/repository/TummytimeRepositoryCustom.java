package com.fa.sonagi.record.activity.repository;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.activity.dto.ActivityResDto;
import com.fa.sonagi.statistics.activity.dto.ActivityStatisticsQueryDto;

public interface TummytimeRepositoryCustom {
	ActivityResDto findTummytimeRecord(Long tummytimeId);

	List<ActivityStatisticsQueryDto> findTummytimeByDay(Long babyId, LocalDate createdDate);
}
