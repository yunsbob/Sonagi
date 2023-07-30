package com.fa.sonagi.record.activity.entity;

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
@Table(name = "play")
public class Plays {

  @Id
  @GeneratedValue
  @Column(name = "play_id")
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  @Column(name = "baby_id")
  private Baby baby;

  @Column(name = "user_id")
  private Long userId;

  @Column(name = "created_time")
  private LocalTime createdTime;

  @Column(name = "created_date")
  private LocalDate createdDate;

  @Column(name = "end_time")
  private LocalTime endTime;

  @Column(name = "memo")
  private String memo;

  public void updatePlays(LocalTime createdTime, LocalTime endTime, String memo) {
    this.createdTime = createdTime;
    this.endTime = endTime;
    this.memo = memo;
  }
}
