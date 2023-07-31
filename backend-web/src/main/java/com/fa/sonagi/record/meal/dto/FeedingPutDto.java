package com.fa.sonagi.record.meal.dto;

import java.sql.Time;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class FeedingPutDto {
  private Long id;
  private Time leftStartTime;
  private Time rightStartTime;
  private Time leftEndTime;
  private Time rightEndTime;
  private String memo;
}
