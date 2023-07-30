package com.fa.sonagi.record.health.dto;

import java.sql.Time;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HealthPutDto {

  private Long id;
  private Time createdTime;
  private String memo;
}
