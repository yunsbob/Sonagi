package com.fa.sonagi.record.meal.dto;

import java.sql.Time;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SnackPutDto {
  private Long id;
  private String memo;
  private Time createdTime;
}
