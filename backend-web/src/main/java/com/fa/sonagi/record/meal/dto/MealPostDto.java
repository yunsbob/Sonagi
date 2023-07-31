package com.fa.sonagi.record.meal.dto;

import java.sql.Time;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MealPostDto {
  private Long userId;
  private Long babyId;
  private Long amount;
  private String memo;
  private Time createdTime;
  private LocalDate createdDate;
}
