package com.fa.sonagi.record.activity.controller;

import com.fa.sonagi.record.activity.dto.ActivityPostDto;
import com.fa.sonagi.record.activity.dto.ActivityPutDto;
import com.fa.sonagi.record.activity.service.TummytimesService;
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

@Tag(name = "Tummytime", description = "터미타임 API")
@RequestMapping("/api/tummytimes")
@RestController
@RequiredArgsConstructor
public class TummytimesController {

  private final TummytimesService tummytimesService;

  @PostMapping
  public ResponseEntity<?> registTummytimes(@RequestBody ActivityPostDto activityPostDto) {
    tummytimesService.registTummytimes(activityPostDto);
    return ResponseEntity.ok().build();
  }

  @PutMapping
  public ResponseEntity<?> updateTummytimes(@RequestBody ActivityPutDto activityPutDto) {
    tummytimesService.updateTummytimes(activityPutDto);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{tummytimeId}")
  public ResponseEntity<?> deleteTummytimes(@PathVariable Long tummytimeId) {
    tummytimesService.deleteTummytimes(tummytimeId);
    return ResponseEntity.ok().build();
  }
}
