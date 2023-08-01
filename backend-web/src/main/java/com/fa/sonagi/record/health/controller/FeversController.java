package com.fa.sonagi.record.health.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.health.dto.FeverResDto;
import com.fa.sonagi.record.health.dto.FeversPostDto;
import com.fa.sonagi.record.health.dto.FeversPutDto;
import com.fa.sonagi.record.health.service.FeversService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Fever", description = "체온 API")
@RequestMapping("/api/fevers")
@RestController
@RequiredArgsConstructor
public class FeversController {

  private final FeversService feversService;

  @GetMapping("/{feverId}")
  public ResponseEntity<?> getFevers(@RequestBody Long feverId) {
    FeverResDto feverResDto = feversService.findFeversById(feverId);

    return ResponseEntity.ok().body(feverResDto);
  }

  @PostMapping
  public ResponseEntity<?> registFevers(@RequestBody FeversPostDto feversPostDto) {
    feversService.registFevers(feversPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updateFevers(@RequestBody FeversPutDto feversPutDto) {
    feversService.updateFevers(feversPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{feverId}")
  public ResponseEntity<?> deleteFevers(@PathVariable Long feverId) {
    feversService.deleteFeversById(feverId);
    return ResponseEntity.ok().build();
  }
}