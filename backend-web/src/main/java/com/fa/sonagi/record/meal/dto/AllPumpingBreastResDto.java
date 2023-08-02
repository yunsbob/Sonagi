package com.fa.sonagi.record.meal.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AllPumpingBreastResDto {
	private List<MealResDto> pumpingBreasts;

	public AllPumpingBreastResDto() {
		this.pumpingBreasts = new ArrayList<>();
	}
}
