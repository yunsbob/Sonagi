package com.fa.sonagi.record.diaper.controller;

import com.fa.sonagi.record.diaper.dto.PeesPostDto;
import com.fa.sonagi.record.diaper.dto.PeesPutDto;
import com.fa.sonagi.record.diaper.service.PeesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/pees")
@RestController
@RequiredArgsConstructor
public class PeesController {

  private final PeesService peesService;

  @PostMapping
  public ResponseEntity<?> registPees(@RequestBody PeesPostDto peesPostDto) {
    peesService.registPees(peesPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updatePees(@RequestBody PeesPutDto peesPutDto) {
    peesService.updatePees(peesPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{peeId}")
  public ResponseEntity<?> deletePees(@PathVariable Long peeId) {
    peesService.deletePeesById(peeId);
    return ResponseEntity.ok().build();
  }
}