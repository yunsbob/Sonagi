package com.fa.sonagi.statistics.meal.dto;

import java.sql.Time;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MealStatisticsQueryDto {
	Time createdTime;
	Long amount;
}
