package com.fa.sonagi.record.meal.entity;


import jakarta.persistence.*;

import java.sql.Time;
import java.time.LocalDate;

import lombok.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "baby_food",
    indexes = @Index(name = "idx_baby_id_created_date", columnList = "baby_id, created_date"))
public class BabyFood {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "baby_food_id")
    private Long id;

    @Column(name = "baby_id")
    private Long babyId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "amount")
    private Long amount;

    @Column(name = "memo")
    private String memo;

    @Column(name = "created_time")
    private Time createdTime;

    @Column(name = "created_date")
    private LocalDate createdDate;

    public void updateBabyFood(Long amount, String memo, Time createdTime) {
        this.amount = amount;
        this.memo = memo;
        this.createdTime = createdTime;
    }
}
