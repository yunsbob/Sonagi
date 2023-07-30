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
@Table(name = "medication",
    indexes = @Index(name = "idx_baby_id_created_date", columnList = "baby_id, created_date"))
public class Medications {

  @Id
  @GeneratedValue
  @Column(name = "medication_id")
  private Long id;

  @Column(name = "user_id")
  private Long userId;

  @Column(name = "baby_id")
  private Long babyId;

  @Column(name = "created_date")
  private LocalDate createdDate;

  @Column(name = "created_time")
  private LocalTime createdTime;

  @Column(name = "memo")
  private String memo;

  public void updateMedications(LocalTime createdTime, String memo) {
    this.createdTime = createdTime;
    this.memo = memo;
  }
}