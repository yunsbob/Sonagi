package com.fa.sonagi.statistics.meal.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MealStatisticsResDto {
	private List<MealStatisticsQueryDto> babyFoods;
	private List<MealStatisticsQueryDto> breastFeedings;
	private List<SnackFeedingStatisticsQueryDto> feedings;
	private List<MealStatisticsQueryDto> infantFormulas;
	private List<MealStatisticsQueryDto> milks;
	private List<SnackFeedingStatisticsQueryDto> snacks;
	private Long cnt;
	private Long amount;
	private Long cntPercent;
	private Long yesterdayCntPercent;
	private Long amountPercent;
	private Long yesterdayAmountPercent;

	public MealStatisticsResDto() {
		this.babyFoods = new ArrayList<>();
		this.breastFeedings = new ArrayList<>();
		this.feedings = new ArrayList<>();
		this.infantFormulas = new ArrayList<>();
		this.milks = new ArrayList<>();
		this.snacks = new ArrayList<>();
	}
}
