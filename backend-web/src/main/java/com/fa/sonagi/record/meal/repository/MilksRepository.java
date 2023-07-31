package com.fa.sonagi.record.meal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.record.meal.entity.Milk;

public interface MilksRepository extends JpaRepository<Milk, Long> {
}
