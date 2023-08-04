package com.fa.sonagi.record.activity.dto;

import java.sql.Time;

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
public class ActivityResDto {
	private Long id;
	private Time createdTime;
	private Time endTime;
	private String memo;
}
