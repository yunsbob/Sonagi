package com.fa.sonagi.record.health.repository;

import com.fa.sonagi.record.health.entity.Medications;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicationsRepository extends JpaRepository<Medications, Long> {

}