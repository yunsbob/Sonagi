package com.fa.sonagi.record.extra.controller;

import com.fa.sonagi.record.extra.dto.ExtrasPostDto;
import com.fa.sonagi.record.extra.dto.ExtrasPutDto;
import com.fa.sonagi.record.extra.service.ExtrasService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/extras")
@Tag(name = "Extra", description = "기타 API")
@RestController
@RequiredArgsConstructor
public class ExtrasController {

  private final ExtrasService extrasService;

  @PostMapping
  public ResponseEntity<?> registExtras(@RequestBody ExtrasPostDto extrasPostDto) {
    extrasService.registExtras(extrasPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updateExtras(@RequestBody ExtrasPutDto extrasPutDto) {
    extrasService.updateExtras(extrasPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{extraId}")
  public ResponseEntity<?> deleteExtras(@PathVariable Long extraId) {
    extrasService.deleteExtras(extraId);
    return ResponseEntity.ok().build();
  }
}
