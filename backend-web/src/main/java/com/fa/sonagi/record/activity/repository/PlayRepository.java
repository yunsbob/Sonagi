package com.fa.sonagi.record.activity.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.record.activity.entity.Play;

public interface PlayRepository extends JpaRepository<Play, Long> {

}
