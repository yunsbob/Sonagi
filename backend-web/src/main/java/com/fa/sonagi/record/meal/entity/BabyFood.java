package com.fa.sonagi.record.meal.entity;

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
@Table(name = "baby_food")
public class BabyFood {

    @Id @GeneratedValue
    @Column(name = "baby_food_id")
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

    public void updateBabyFoods (Long amount, String memo, LocalTime createdTime) {
        this.amount = amount;
        this.memo = memo;
        this.createdTime = createdTime;
    }
}
