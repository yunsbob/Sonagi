package com.fa.sonagi.record.meal.dto;

import java.sql.Time;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MealResDto {
	private Long id;
	private Long amount;
	private String memo;
	private Time createdTime;
}
