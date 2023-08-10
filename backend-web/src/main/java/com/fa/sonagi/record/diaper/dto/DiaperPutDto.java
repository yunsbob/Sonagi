package com.fa.sonagi.record.diaper.dto;

import java.sql.Time;
import java.time.LocalTime;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DiaperPutDto {

  @NotNull
  private Long id;

  @NotNull
  private LocalTime createdTime;
  private String memo;
}