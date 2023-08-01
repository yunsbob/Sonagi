package com.fa.sonagi.record.sleep.dto;

import java.sql.Time;
import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SleepPostDto {
	private Long userId;
	private Long babyId;
	private LocalDate createdDate;
	private Time createdTime;
	private Time endTime;
	private String memo;
}
