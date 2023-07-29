package com.fa.sonagi.record.meal.dto;

import java.time.LocalDate;
import java.time.LocalTime;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MealPostDto {
  private Long userId;
  private Long babyId;
  private Long amount;
  private String memo;
  private LocalTime createdTime;
  private LocalDate createdDate;
}
