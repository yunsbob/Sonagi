package com.fa.sonagi.record.activity.service;

import com.fa.sonagi.record.activity.dto.ActivityPostDto;
import com.fa.sonagi.record.activity.dto.ActivityPutDto;
import com.fa.sonagi.record.activity.entity.Plays;

public interface PlaysServeice {

  Plays findPlaysById(Long id);

  void registPlays(ActivityPostDto playsPostDto);

  void updatePlays(ActivityPutDto playsPutDto);

  void deletePlays(Long id);

}
