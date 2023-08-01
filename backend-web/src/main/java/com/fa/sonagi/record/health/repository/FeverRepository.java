package com.fa.sonagi.record.health.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.record.health.entity.Fever;

public interface FeverRepository extends JpaRepository<Fever, Long> {

}