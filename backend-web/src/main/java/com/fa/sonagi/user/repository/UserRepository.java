package com.fa.sonagi.user.repository;

import com.fa.sonagi.user.entity.Users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Users, Long> {
	Users findBySocialId(String social);
}