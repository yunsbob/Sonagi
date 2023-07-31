package com.fa.sonagi.record.diaper.dto;

import java.sql.Time;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DiaperPutDto {

  private Long id;
  private Time createdTime;
  private String memo;
}