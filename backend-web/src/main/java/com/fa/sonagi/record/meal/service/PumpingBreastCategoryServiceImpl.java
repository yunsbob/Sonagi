package com.fa.sonagi.record.meal.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.meal.dto.MealResDto;
import com.fa.sonagi.record.meal.entity.PumpingBreast;
import com.fa.sonagi.record.meal.repository.PumpingBreastRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PumpingBreastCategoryServiceImpl implements PumpingBreastCategoryService{

	private final PumpingBreastRepository pumpingBreastRepository;

	/**
	 * babyId와 createdDate로 모든 유축 데이터 찾기
	 */
	@Override
	public List<MealResDto> findAllPumpingBreast(Long babyId, LocalDate createdDate) {
		List<PumpingBreast> findPumpingBreasts = pumpingBreastRepository.findByBabyIdAndCreatedDate(babyId, createdDate);

		List<MealResDto> pumpingBreasts = findPumpingBreasts.stream()
			.map(pb -> new MealResDto(pb.getId(), pb.getAmount(), pb.getMemo(), pb.getCreatedTime()))
			.collect(Collectors.toList());

		return pumpingBreasts;
	}
}
