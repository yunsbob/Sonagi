package com.fa.sonagi.record.meal.entity;

import java.sql.Time;
import java.time.LocalDate;

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
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "snack",
    indexes = @Index(name = "idx_baby_id_created_date", columnList = "baby_id, created_date"))
public class Snack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "snack_id")
    private Long id;

    @Column(name = "baby_id")
    private Long babyId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "memo")
    private String memo;

    @Column(name = "created_time")
    private Time createdTime;

    @Column(name = "created_date")
    private LocalDate createdDate;

    public void updateSnack(String memo, Time createdTime) {
        this.memo = memo;
        this.createdTime = createdTime;
    }
}
