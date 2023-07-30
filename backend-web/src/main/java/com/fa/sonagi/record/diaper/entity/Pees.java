package com.fa.sonagi.record.diaper.entity;

import jakarta.persistence.*;
import java.sql.Time;
import java.time.LocalDate;
import lombok.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "pee",
    indexes = @Index(name = "idx_baby_id_created_date", columnList = "baby_id, created_date"))

public class Pees {

  @Id
  @GeneratedValue
  @Column(name = "pee_id")
  private Long id;

  @Column(name = "baby_id")
  private Long babyId;

  @Column(name = "user_id")
  private Long userId;

  @Column(name = "created_time")
  private Time createdTime;

  @Column(name = "created_date")
  private LocalDate createdDate;

  @Column(name = "memo")
  private String memo;

  public void updatePees(Time createdTime, String memo) {
    this.createdTime = createdTime;
    this.memo = memo;
  }
}
