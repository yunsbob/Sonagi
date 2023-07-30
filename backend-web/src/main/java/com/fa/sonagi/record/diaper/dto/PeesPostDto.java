package com.fa.sonagi.record.diaper.dto;

import java.time.LocalDate;
import java.time.LocalTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PeesPostDto {

  private Long userId;
  private Long babyId;
  private LocalDate createdDate;
  private LocalTime createdTime;
  private String memo;
}