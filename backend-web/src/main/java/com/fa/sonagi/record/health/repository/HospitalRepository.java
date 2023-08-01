package com.fa.sonagi.record.health.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.record.health.entity.Hospital;

public interface HospitalRepository extends JpaRepository<Hospital, Long> {

}
