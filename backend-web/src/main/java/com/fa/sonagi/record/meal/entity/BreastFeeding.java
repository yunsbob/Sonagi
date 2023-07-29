package com.fa.sonagi.record.meal.entity;

import com.fa.sonagi.baby.entity.Baby;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.time.LocalTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "breast_feeding")
public class BreastFeeding {

    @Id @GeneratedValue
    @Column(name = "breast_feeding_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "baby_id")
    private Baby baby;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "amount")
    private Long amount;

    @Column(name = "memo")
    private String memo;

    @Column(name = "created_time")
    private LocalTime createdTime;

    @Column(name = "created_date")
    private LocalDate createdDate;

    public void updateBreastFeeding (Long amount, String memo, LocalTime createdTime) {
        this.amount = amount;
        this.memo = memo;
        this.createdTime = createdTime;
    }
}
