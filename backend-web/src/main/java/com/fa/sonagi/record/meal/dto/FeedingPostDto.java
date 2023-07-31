package com.fa.sonagi.record.meal.dto;

import java.sql.Time;
import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class FeedingPostDto {
  private Long userId;
  private Long babyId;
  private Time leftStartTime;
  private Time rightStartTime;
  private Time leftEndTime;
  private Time rightEndTime;
  private String memo;
  private Time createdTime;
  private LocalDate createdDate;
}
