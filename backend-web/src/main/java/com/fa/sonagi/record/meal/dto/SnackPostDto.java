package com.fa.sonagi.record.meal.dto;

import java.sql.Time;
import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SnackPostDto {
  private Long userId;
  private Long babyId;
  private String memo;
  private Time createdTime;
  private LocalDate createdDate;
}
