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
@Table(name = "vaccination")
public class Vaccination {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "vaccination_id", nullable = false)
	private Long id;

	@Column(name = "disease", length = 50, nullable = false)
	private String disease;

	@Column(name = "vaccine_name", length = 25, nullable = false)
	private String vaccineName;

	@Column(name = "start_date", nullable = false)
	private int startDate;

	@Column(name = "end_date", nullable = false)
	private int endDate;

	@Column(name = "content", nullable = false)
	private String content;
}