package com.fa.sonagi.diary.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/diary")
@Tag(name = "Diary", description = "일기 CRUD API")
@RequiredArgsConstructor
public class DiaryController {

}
