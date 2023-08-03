package com.fa.sonagi.baby.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.baby.entity.UserBaby;

public interface UserBabyRepository extends JpaRepository<UserBaby, Long> {
}
