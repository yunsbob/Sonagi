package com.fa.sonagi.record.sleep.dto;

import java.sql.Time;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SleepsPutDto {
	private Long id;
	private Time createdTime;
	private Time endTime;
	private String memo;
}
