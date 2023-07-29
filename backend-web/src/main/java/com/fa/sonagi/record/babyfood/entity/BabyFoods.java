package com.fa.sonagi.record.babyfood.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import lombok.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "baby_food")
public class BabyFoods {

    @Id @GeneratedValue
    @Column(name = "baby_food_id")
    private Long id;

    @Column(name = "baby_id")
    private Long babyId;

    @Column(name = "amount")
    private Long amount;

    @Column(name = "memo")
    private String memo;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "created_time")
    private LocalTime createdTime;

    @Column(name = "created_date")
    private LocalDate createdDate;

    private void updateBabyFoods (LocalTime createdTime, Long amount, String memo) {
        this.createdTime = createdTime;
        this.amount = amount;
        this.memo = memo;
    }
}
