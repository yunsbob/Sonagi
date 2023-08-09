package com.fa.sonagi.question.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.question.dto.QuestionPostDto;
import com.fa.sonagi.question.dto.QuestionResDto;
import com.fa.sonagi.question.service.QuestionService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RequestMapping("/api/questions")
@Tag(name = "Question", description = "문의사항 API")
@RestController
@RequiredArgsConstructor
public class QuestionController {
	private final QuestionService questionService;

	/**
	 * 문의사항 조회
	 */
	@GetMapping("/{questionId}")
	public QuestionResDto findRequest(@PathVariable Long questionId) {
		return questionService.findQuestionById(questionId);
	}

	/**
	 * 문의사항 등록
	 */
	@PostMapping
	public ResponseEntity<?> registQuestion(@RequestBody QuestionPostDto questionPostDto) {
		questionService.registQuestion(questionPostDto);
		return ResponseEntity.ok().build();
	}

	/**
	 * 문의사항 리스트 조회
	 */
	@GetMapping
	public List<QuestionResDto> findQuestionList() {
		return questionService.findQuestionList();
	}
}
