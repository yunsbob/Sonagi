package com.fa.sonagi.record.babyfood.dto;

import java.time.LocalTime;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class BabyFoodsPostDto {
  private Long userId;
  private Long babyId;
  private LocalTime createdTime;
  private Long amount;
  private String memo;
}
