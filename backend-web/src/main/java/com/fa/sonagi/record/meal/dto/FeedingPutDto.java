package com.fa.sonagi.record.meal.dto;

import java.sql.Time;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class FeedingPutDto {
  @NotNull
  private Long id;

  @NotNull
  private Time leftStartTime;

  @NotNull
  private Time rightStartTime;

  @NotNull
  private Time leftEndTime;

  @NotNull
  private Time rightEndTime;

  private String memo;
}
