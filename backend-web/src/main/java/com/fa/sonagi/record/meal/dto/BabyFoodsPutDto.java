package com.fa.sonagi.record.meal.dto;

import java.time.LocalTime;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class BabyFoodsPutDto {
  private Long id;
  private Long amount;
  private String memo;
  private LocalTime createdTime;
}
