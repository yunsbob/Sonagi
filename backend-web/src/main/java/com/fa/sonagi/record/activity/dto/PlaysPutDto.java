package com.fa.sonagi.record.activity.dto;

import java.time.LocalTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlaysPutDto {

  private Long id;
  private LocalTime createdTime;
  private LocalTime endTime;
  private String memo;
}
