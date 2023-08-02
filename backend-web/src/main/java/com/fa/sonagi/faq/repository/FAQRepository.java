package com.fa.sonagi.faq.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fa.sonagi.faq.entity.FAQ;

public interface FAQRepository extends JpaRepository<FAQ, Long> {
}
