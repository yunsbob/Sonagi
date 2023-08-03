package com.fa.sonagi.faq.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.faq.dto.FAQPostDto;
import com.fa.sonagi.faq.dto.FAQPutDto;
import com.fa.sonagi.faq.dto.FAQResDto;
import com.fa.sonagi.faq.service.FAQService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "FAQ", description = "FAQ API")
@RequestMapping("/api/faqs")
@RestController
@RequiredArgsConstructor
public class FAQController {
	private final FAQService faqService;

	/**
	 * FAQ 기록 전체 조회
	 */
	@GetMapping
	public List<FAQResDto> getAllFAQs() {
		return faqService.findAllFAQs();
	}

	/**
	 * FAQ 기록 조회
	 */
	@GetMapping("/{FAQId}")
	public ResponseEntity<?> getFAQ(@PathVariable Long FAQId) {
		FAQResDto faqResDto = faqService.findFAQById(FAQId);

		return ResponseEntity.ok().body(faqResDto);
	}

	/**
	 * FAQ 기록 등록
	 */
	@PostMapping
	public ResponseEntity<?> registFAQ(@RequestBody FAQPostDto faqPostDto) {
		System.out.println("ddddd");
		faqService.registFAQ(faqPostDto);
		System.out.println(faqPostDto.getTitle());
		return ResponseEntity.ok().build();
	}

	/**
	 * FAQ 기록 수정
	 */
	@PutMapping
	public ResponseEntity<?> updateFAQ(@RequestBody FAQPutDto faqPutDto) {
		faqService.updateFAQ(faqPutDto);
		return ResponseEntity.ok().build();
	}

	/**
	 * FAQ 기록 삭제
	 */
	@DeleteMapping("/{FAQId}")
	public ResponseEntity<?> deleteFAQ(@PathVariable Long FAQId) {
		faqService.deleteFAQ(FAQId);
		return ResponseEntity.ok().build();
	}
}
