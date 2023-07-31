package com.fa.sonagi.record.activity.dto;

import java.sql.Time;
import java.time.LocalTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ActivityPutDto {

  private Long id;
  private Time createdTime;
  private Time endTime;
  private String memo;
}
