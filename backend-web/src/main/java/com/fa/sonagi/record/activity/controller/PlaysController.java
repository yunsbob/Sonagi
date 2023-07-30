package com.fa.sonagi.record.activity.controller;

import com.fa.sonagi.record.activity.dto.PlaysPostDto;
import com.fa.sonagi.record.activity.dto.PlaysPutDto;
import com.fa.sonagi.record.activity.service.PlaysServeice;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/plays")
@RestController
@RequiredArgsConstructor
public class PlaysController {

  private final PlaysServeice playsServeice;

  @PostMapping
  public ResponseEntity<?> registPlays(@RequestBody PlaysPostDto playsPostDto) {
    playsServeice.registPlays(playsPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updatePlays(@RequestBody PlaysPutDto playsPutDto) {
    playsServeice.updatePlays(playsPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{playId}")
  public ResponseEntity<?> deletePlays(@PathVariable Long playId) {
    playsServeice.deletePlays(playId);
    return ResponseEntity.ok().build();
  }
}
