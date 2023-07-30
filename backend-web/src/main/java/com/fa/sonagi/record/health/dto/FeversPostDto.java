package com.fa.sonagi.record.health.dto;

import java.time.LocalDate;
import java.time.LocalTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FeversPostDto {

  private Long userId;
  private Long babyId;
  private LocalDate createdDate;
  private LocalTime createdTime;
  private Double fever;
  private String memo;
}