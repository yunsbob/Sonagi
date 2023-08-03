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
@Table(name = "fever",
    indexes = @Index(name = "idx_baby_id_created_date", columnList = "baby_id, created_date"))
public class Fever {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "fever_id", nullable = false)
  private Long id;

  @Column(name = "baby_id", nullable = false)
  private Long babyId;

  @Column(name = "user_id", nullable = false)
  private Long userId;

  @Column(name = "created_date", nullable = false)
  private LocalDate createdDate;

  @Column(name = "created_time", nullable = false)
  private Time createdTime;

  @Column(name = "body_temperature")
  @ColumnDefault("36.5")
  private Double bodyTemperature;

  @Column(name = "memo", length = 100)
  private String memo;

  public void updateFever(Time createdTime, Double bodyTemperature, String memo) {
    this.createdTime = createdTime;
    this.bodyTemperature = bodyTemperature;
    this.memo = memo;
  }
}