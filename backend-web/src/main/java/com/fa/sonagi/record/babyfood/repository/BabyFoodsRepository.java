package com.fa.sonagi.record.babyfood.repository;

import com.fa.sonagi.record.babyfood.entity.BabyFoods;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BabyFoodsRepository extends JpaRepository<BabyFoods, Long> {
}
