package com.fa.sonagi.record.meal.repository;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.meal.dto.MealResDto;
import com.fa.sonagi.statistics.meal.dto.MealStatisticsQueryDto;

public interface InfantFormulaRepositoryCustom {
	MealResDto findInfantFormulaRecord(Long infantFormulaId);

	List<MealStatisticsQueryDto> findInfantFormulaByDay(Long babyId, LocalDate createdDate);

	Long findInfantFormulaCnt(Long babyId, LocalDate createdDate);

	Long findInfantFormulaAmount(Long babyId, LocalDate createdDate);
}
