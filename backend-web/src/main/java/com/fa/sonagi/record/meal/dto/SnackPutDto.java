package com.fa.sonagi.record.meal.dto;

import java.sql.Time;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SnackPutDto {

  @NotNull
  private Long id;

  private String memo;

  @NotNull
  private Time createdTime;
}
