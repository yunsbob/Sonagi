package com.fa.sonagi.record.sleep.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.record.sleep.entity.Sleeps;

public interface SleepsRepository extends JpaRepository<Sleeps, Long> {
}
