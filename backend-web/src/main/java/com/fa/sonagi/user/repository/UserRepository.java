package com.fa.sonagi.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.user.entity.Users;

public interface UserRepository extends JpaRepository<Users, Long>, UserRepositoryCustom {

	Users findUserByEmail(String email);

	Optional<Users> findByEmail(String email);

	boolean existsByEmail(String email);
}