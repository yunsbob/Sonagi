package com.fa.sonagi.record.meal.dto;

import java.sql.Time;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MealPutDto {

  @NotNull
  private Long id;

  @NotNull
  private Long amount;

  private String memo;

  @NotNull
  private Time createdTime;
}
