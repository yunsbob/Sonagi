package com.fa.sonagi.record.pumpingBreast.dto;

import java.sql.Time;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class PumpingBreastPutDto {

  @NotNull
  private Long id;

  @NotNull
  private Long amount;

  private String memo;

  @NotNull
  private Time createdTime;
}
