package com.fa.sonagi.record.meal.service;

import java.time.LocalDate;
import java.util.List;

import com.fa.sonagi.record.meal.dto.MealResDto;

public interface PumpingBreastCategoryService {
	List<MealResDto> findAllPumpingBreast(Long babyId, LocalDate createdDate);
}
