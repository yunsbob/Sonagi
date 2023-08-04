package com.fa.sonagi.memo.entity;

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
@Table(name = "caution")
public class Caution {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "caution_id", nullable = false)
	private Long id;

	@Column(name = "baby_id")
	private Long babyId;

	@Column(name = "user_id")
	private Long userId;

	@Column(name = "memo", length = 300)
	private String memo;

	public void updateCaution(String memo) {
		this.memo = memo;
	}
}
