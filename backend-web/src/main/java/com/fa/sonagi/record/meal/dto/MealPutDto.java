package com.fa.sonagi.record.meal.dto;

import java.sql.Time;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MealPutDto {
  private Long id;
  private Long amount;
  private String memo;
  private Time createdTime;
}
