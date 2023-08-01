package com.fa.sonagi.record.diaper.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.record.diaper.entity.Poop;

public interface PoopRepository extends JpaRepository<Poop, Long> {

}