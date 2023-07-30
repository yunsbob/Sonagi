package com.fa.sonagi.record.health.dto;

import java.time.LocalTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HospitalsPutDto {

  private Long id;
  private LocalTime createdTime;
  private String memo;
}
