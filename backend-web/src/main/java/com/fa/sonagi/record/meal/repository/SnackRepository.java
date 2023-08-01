package com.fa.sonagi.record.meal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.record.meal.entity.Snack;

public interface SnackRepository extends JpaRepository<Snack, Long> {
}
