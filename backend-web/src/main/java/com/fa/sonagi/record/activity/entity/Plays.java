package com.fa.sonagi.record.activity.entity;

import jakarta.persistence.*;
import java.sql.Time;
import java.time.LocalDate;
import lombok.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "play")
public class Plays {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "play_id")
  private Long id;

  @Column(name = "baby_id")
  private Long babyId;

  @Column(name = "user_id")
  private Long userId;

  @Column(name = "created_time")
  private Time createdTime;

  @Column(name = "created_date")
  private LocalDate createdDate;

  @Column(name = "end_time")
  private Time endTime;

  @Column(name = "memo")
  private String memo;

  public void updatePlays(Time createdTime, Time endTime, String memo) {
    this.createdTime = createdTime;
    this.endTime = endTime;
    this.memo = memo;
  }
}
