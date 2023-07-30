package com.fa.sonagi.record.activity.service;

import com.fa.sonagi.record.activity.dto.PlaysPostDto;
import com.fa.sonagi.record.activity.dto.PlaysPutDto;
import com.fa.sonagi.record.activity.entity.Plays;

public interface PlaysServeice {

  Plays findPlaysById(Long id);

  void registPlays(PlaysPostDto playsPostDto);

  void updatePlays(PlaysPutDto playsPutDto);

  void deletePlays(Long id);

}
