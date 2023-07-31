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
@Table(name = "feeding",
    indexes = @Index(name = "idx_baby_id_created_date", columnList = "baby_id, created_date"))
public class Feeding {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "feeding_id")
    private Long id;

    @Column(name = "baby_id")
    private Long babyId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "left_start_time")
    private Time leftStartTime;

    @Column(name = "right_start_time")
    private Time rightStartTime;

    @Column(name = "left_end_time")
    private Time leftEndTime;

    @Column(name = "right_end_time")
    private Time rightEndTime;

    @Column(name = "memo")
    private String memo;

    @Column(name = "created_time")
    private Time createdTime;

    @Column(name = "created_date")
    private LocalDate createdDate;

    public void updateFeeding(Time leftStartTime, Time rightStartTime, Time leftEndTime, Time rightEndTime, String memo) {
        this.leftStartTime = leftStartTime;
        this.rightStartTime = rightStartTime;
        this.leftEndTime = leftEndTime;
        this.rightEndTime = rightEndTime;
        this.memo = memo;
    }
}
