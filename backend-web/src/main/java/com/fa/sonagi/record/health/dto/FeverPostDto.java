package com.fa.sonagi.record.health.dto;

import java.sql.Time;
import java.time.LocalDate;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FeverPostDto {

  @NotNull
  private Long userId;

  @NotNull
  private Long babyId;

  @NotNull
  private LocalDate createdDate;

  @NotNull
  private Time createdTime;

  @NotNull
  private Double fever;
  private String memo;
}