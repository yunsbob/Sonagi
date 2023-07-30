package com.fa.sonagi.record.health.dto;

import java.sql.Time;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HealthPostDto {

  private Long userId;
  private Long babyId;
  private LocalDate createdDate;
  private Time createdTime;
  private String memo;
}
