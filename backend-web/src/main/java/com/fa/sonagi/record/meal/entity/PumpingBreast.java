package com.fa.sonagi.record.meal.entity;

import java.sql.Time;
import java.time.LocalDate;

import com.fa.sonagi.baby.entity.Baby;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "pumping_breast",
    indexes = @Index(name = "idx_baby_id_created_date", columnList = "baby_id, created_date"))
public class PumpingBreast {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pumping_breast_id")
    private Long id;

    @Column(name = "baby_id", nullable = false)
    private Long babyId;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "amount", nullable = false)
    private Long amount;

    @Column(name = "memo", length = 100)
    private String memo;

    @Column(name = "created_time", nullable = false)
    private Time createdTime;

    @Column(name = "created_date", nullable = false)
    private LocalDate createdDate;

    public void updatePumpingBreast(Long amount, String memo, Time createdTime) {
        this.amount = amount;
        this.memo = memo;
        this.createdTime = createdTime;
    }
}
