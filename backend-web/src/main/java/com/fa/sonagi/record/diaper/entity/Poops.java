package com.fa.sonagi.record.diaper.entity;

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
@Table(name = "poop")
public class Poops {

  @Id
  @GeneratedValue
  @Column(name = "poop_id")
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

  public void updatePoops(LocalTime createdTime, String memo) {
    this.createdTime = createdTime;
    this.memo = memo;
  }

}
