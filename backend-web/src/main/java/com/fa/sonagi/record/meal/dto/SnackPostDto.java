package com.fa.sonagi.record.meal.dto;

import java.sql.Time;
import java.time.LocalDate;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SnackPostDto {

  @NotNull
  private Long userId;

  @NotNull
  private Long babyId;

  private String memo;

  @NotNull
  private Time createdTime;

  @NotNull
  private LocalDate createdDate;
}
