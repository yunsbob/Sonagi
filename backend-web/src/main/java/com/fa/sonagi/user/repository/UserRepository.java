package com.fa.sonagi.user.repository;

import com.fa.sonagi.user.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Users, Long> {

  Users findUserByEmail(String email);

  Optional<Users> findByEmail(String email);

  boolean existsByEmail(String email);
}