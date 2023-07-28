package com.fa.sonagi.user.repository;

import com.fa.sonagi.user.entity.Users;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository {
  Optional<Users> findByEmail(String email);
}
