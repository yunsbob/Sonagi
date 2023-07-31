package com.fa.sonagi.record.meal.dto;

import java.sql.Time;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MealResDto {
	private Long amount;
	private String memo;
	private Time createdTime;
}
