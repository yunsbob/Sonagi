package com.fa.sonagi.record.diaper.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.record.diaper.entity.Pee;

public interface PeeRepository extends JpaRepository<Pee, Long> {

}