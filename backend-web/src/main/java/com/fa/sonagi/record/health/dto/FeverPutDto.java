package com.fa.sonagi.record.health.dto;

import java.sql.Time;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FeverPutDto {

  private Long id;
  private Time createdTime;
  private Double fever;
  private String memo;
}