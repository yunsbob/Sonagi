package com.fa.sonagi.record.health.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.record.health.entity.Medication;

public interface MedicationRepository extends JpaRepository<Medication, Long> {

}