package com.fa.sonagi.record.diaper.controller;

import com.fa.sonagi.record.diaper.dto.DiaperPostDto;
import com.fa.sonagi.record.diaper.dto.DiaperPutDto;
import com.fa.sonagi.record.diaper.service.PoopsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/poops")
@RestController
@RequiredArgsConstructor
public class PoopsController {

  private final PoopsService poopsService;

  @PostMapping
  public ResponseEntity<?> registPoops(@RequestBody DiaperPostDto diaperPostDto) {
    poopsService.registPoops(diaperPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updatePoops(@RequestBody DiaperPutDto diaperPutDto) {
    poopsService.updatePoops(diaperPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{poopId}")
  public ResponseEntity<?> deletePoops(@PathVariable Long poopId) {
    poopsService.deletePoopsById(poopId);
    return ResponseEntity.ok().build();
  }
}