package com.fa.sonagi.record.babyfood.dto;

import java.time.LocalTime;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class BabyFoodsPutDto {
  private Long id;
  private LocalTime createdTime;
  private Long amount;
  private String memo;
}
