package com.fa.sonagi.record.activity.dto;

import java.time.LocalDate;
import java.time.LocalTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlaysPostDto {

  private Long userId;
  private Long babyId;
  private LocalDate createdDate;
  private LocalTime createdTime;
  private LocalTime endTime;
  private String memo;
}
