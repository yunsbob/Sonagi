package com.fa.sonagi.record.diaper.repository;

import com.fa.sonagi.record.diaper.entity.Poops;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PoopsRepository extends JpaRepository<Poops, Long> {

}