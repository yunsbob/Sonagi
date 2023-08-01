package com.fa.sonagi.record.extra.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.extra.dto.ExtraPostDto;
import com.fa.sonagi.record.extra.dto.ExtraPutDto;
import com.fa.sonagi.record.extra.service.ExtraService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RequestMapping("/api/extras")
@Tag(name = "Extra", description = "기타 API")
@RestController
@RequiredArgsConstructor
public class ExtraController {

  private final ExtraService extraService;

  @PostMapping
  public ResponseEntity<?> registExtra(@RequestBody ExtraPostDto extraPostDto) {
    extraService.registExtra(extraPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updateExtra(@RequestBody ExtraPutDto extraPutDto) {
    extraService.updateExtra(extraPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{extraId}")
  public ResponseEntity<?> deleteExtra(@PathVariable Long extraId) {
    extraService.deleteExtra(extraId);
    return ResponseEntity.ok().build();
  }
}
