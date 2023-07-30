package com.fa.sonagi.record.health.entity;

import com.fa.sonagi.baby.entity.Baby;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import lombok.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "fever")
public class Fevers {

  @Id
  @GeneratedValue
  @Column(name = "fever_id")
  private Long id;

  @Column(name = "baby_id")
  private Long babyId;

  @Column(name = "user_id")
  private Long userId;

  @Column(name = "created_date")
  private LocalDate createdDate;

  @Column(name = "created_time")
  private LocalTime createdTime;

  @Column(name = "fever")
  private Double fever;

  @Column(name = "memo")
  private String memo;

  public void updateFevers(LocalTime createdTime, Double fever, String memo) {
    this.createdTime = createdTime;
    this.fever = fever;
    this.memo = memo;
  }
}