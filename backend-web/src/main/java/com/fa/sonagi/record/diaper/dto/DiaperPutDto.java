package com.fa.sonagi.record.diaper.dto;

import java.sql.Time;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DiaperPutDto {

  @NotNull
  private Long id;

  @NotNull
  private Time createdTime;
  private String memo;
}