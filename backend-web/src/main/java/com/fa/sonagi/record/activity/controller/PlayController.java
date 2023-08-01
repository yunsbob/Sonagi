package com.fa.sonagi.record.activity.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fa.sonagi.record.activity.dto.ActivityPostDto;
import com.fa.sonagi.record.activity.dto.ActivityPutDto;
import com.fa.sonagi.record.activity.service.PlayServeice;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RequestMapping("/api/plays")
@Tag(name = "Play", description = "놀이 API")
@RestController
@RequiredArgsConstructor
public class PlayController {

  private final PlayServeice playServeice;

  @PostMapping
  public ResponseEntity<?> registPlay(@RequestBody ActivityPostDto activityPostDto) {
    playServeice.registPlay(activityPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updatePlay(@RequestBody ActivityPutDto activityPutDto) {
    playServeice.updatePlay(activityPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{playId}")
  public ResponseEntity<?> deletePlay(@PathVariable Long playId) {
    playServeice.deletePlay(playId);
    return ResponseEntity.ok().build();
  }
}
