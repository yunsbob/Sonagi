package com.fa.sonagi.record.activity.controller;

import com.fa.sonagi.record.activity.dto.ActivityPostDto;
import com.fa.sonagi.record.activity.dto.ActivityPutDto;
import com.fa.sonagi.record.activity.service.PlaysServeice;
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

@RequestMapping("/api/plays")
@Tag(name = "Play", description = "놀이 API")
@RestController
@RequiredArgsConstructor
public class PlaysController {

  private final PlaysServeice playsServeice;

  @PostMapping
  public ResponseEntity<?> registPlays(@RequestBody ActivityPostDto playsPostDto) {
    playsServeice.registPlays(playsPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updatePlays(@RequestBody ActivityPutDto playsPutDto) {
    playsServeice.updatePlays(playsPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{playId}")
  public ResponseEntity<?> deletePlays(@PathVariable Long playId) {
    playsServeice.deletePlays(playId);
    return ResponseEntity.ok().build();
  }
}
