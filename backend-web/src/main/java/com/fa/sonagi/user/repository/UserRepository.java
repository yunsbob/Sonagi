package com.fa.sonagi.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.user.entity.Users;

public interface UserRepository extends JpaRepository<Users, Long> {
	Users findBySocialId(String social);

	@Override
	Optional<Users> findById(Long id);

	Optional<Users> findByEmail(String email);

}