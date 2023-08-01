package com.fa.sonagi.record.extra.dto;

import java.sql.Time;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ExtraPutDto {

  @NotNull
  private Long id;

  @NotNull
  private Time createdTime;
  private String memo;
}
