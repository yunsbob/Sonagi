package com.fa.sonagi.record.health.dto;

import java.sql.Time;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FeverPutDto {

  @NotNull
  private Long id;

  @NotNull
  private Time createdTime;

  @NotNull
  private Double fever;
  private String memo;
}