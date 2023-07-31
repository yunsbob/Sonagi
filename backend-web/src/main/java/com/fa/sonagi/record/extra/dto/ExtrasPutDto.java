package com.fa.sonagi.record.extra.dto;

import java.sql.Time;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ExtrasPutDto {

  private Long id;
  private Time createdTime;
  private String memo;
}
