package com.fa.sonagi.record.diaper.dto;

import java.sql.Time;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DiaperPostDto {

  private Long userId;
  private Long babyId;
  private LocalDate createdDate;
  private Time createdTime;
  private String memo;
}