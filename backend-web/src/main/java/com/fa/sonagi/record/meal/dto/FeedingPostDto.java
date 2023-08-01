package com.fa.sonagi.record.meal.dto;

import java.sql.Time;
import java.time.LocalDate;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class FeedingPostDto {

  @NotNull
  private Long userId;

  @NotNull
  private Long babyId;

  @NotNull
  private Time leftStartTime;

  @NotNull
  private Time rightStartTime;

  @NotNull
  private Time leftEndTime;

  @NotNull
  private Time rightEndTime;

  private String memo;

  @NotNull
  private LocalDate createdDate;
}
