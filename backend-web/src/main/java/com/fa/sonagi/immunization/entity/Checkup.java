package com.fa.sonagi.immunization.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "checkup")
public class Checkup {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "checkup_id", nullable = false)
	private Long id;

	@Column(name = "checkup_name", length = 50)
	private String checkupName;

	@Column(name = "start_date")
	private int startDate;

	@Column(name = "end_date")
	private int endDate;
}
