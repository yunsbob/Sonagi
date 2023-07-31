package com.fa.sonagi.record.health.entity;

import java.sql.Time;
import java.time.LocalDate;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@DynamicInsert
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "hospital",
    indexes = @Index(name = "idx_baby_id_created_date", columnList = "baby_id, created_date"))
public class Hospitals {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "hospital_id", nullable = false)
  @NotNull
  private Long id;

  @Column(name = "baby_id", nullable = false)
  @NotNull
  private Long babyId;

  @Column(name = "user_id", nullable = false)
  @NotNull
  private Long userId;

  @Column(name = "created_date", nullable = false)
  @NotNull
  private LocalDate createdDate;

  @Column(name = "created_time", nullable = false)
  @NotNull
  private Time createdTime;

  @Column(name = "memo", length = 100)
  @ColumnDefault(" ")
  private String memo;

  public void updateHospitals(Time createdTime, String memo) {
    this.createdTime = createdTime;
    this.memo = memo;
  }
}