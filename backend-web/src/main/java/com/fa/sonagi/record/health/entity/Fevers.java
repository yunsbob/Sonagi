package com.fa.sonagi.record.health.entity;

import jakarta.persistence.*;
import java.sql.Time;
import java.time.LocalDate;
import lombok.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "fever",
    indexes = @Index(name = "idx_baby_id_created_date", columnList = "baby_id, created_date"))
public class Fevers {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "fever_id")
  private Long id;

  @Column(name = "baby_id")
  private Long babyId;

  @Column(name = "user_id")
  private Long userId;

  @Column(name = "created_date")
  private LocalDate createdDate;

  @Column(name = "created_time")
  private Time createdTime;

  @Column(name = "fever")
  private Double fever;

  @Column(name = "memo")
  private String memo;

  public void updateFevers(Time createdTime, Double fever, String memo) {
    this.createdTime = createdTime;
    this.fever = fever;
    this.memo = memo;
  }
}