package com.fa.sonagi.immunization.entity;

import java.time.LocalDate;

import com.fa.sonagi.baby.entity.Baby;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
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
@Table(name = "checkup_status")
public class CheckupStatus {
	@Id
	@GeneratedValue
	@Column(name = "checkup_status_id", nullable = false)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "baby_id")
	private Baby baby;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "checkup_id")
	private Checkup checkup;

	@Column(name = "checkup_date")
	private LocalDate checkupDate;

	@Column(name = "checkup_notification", nullable = false, columnDefinition = "VARCHAR(1) default 'N'")
	private String checkupNotification;

	@PrePersist
	public void setDefaultValues() {
		if (checkupNotification == null) {
			checkupNotification = "N";
		}
	}

	public void updateCheckup(LocalDate checkupDate) {
		this.checkupDate = checkupDate;
	}

	public void checkupOn(String checkupNotification) {
		this.checkupNotification = checkupNotification;
	}

}
