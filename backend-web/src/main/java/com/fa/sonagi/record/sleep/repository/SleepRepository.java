package com.fa.sonagi.record.sleep.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.record.sleep.entity.Sleep;

public interface SleepRepository extends JpaRepository<Sleep, Long> {
}
