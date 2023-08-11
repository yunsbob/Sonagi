package com.fa.sonagi.record.sleep.dto;

import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SleepResDto {
	private Long id;
	private LocalTime createdTime;
	private LocalTime endTime;
	private String memo;
}
