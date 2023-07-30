package com.fa.sonagi.record.activity.service;

import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.record.activity.dto.ActivityPostDto;
import com.fa.sonagi.record.activity.dto.ActivityPutDto;
import com.fa.sonagi.record.activity.entity.Plays;
import com.fa.sonagi.record.activity.repository.PlaysRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PlaysServiceImpl implements PlaysServeice {

  private final PlaysRepository playsRepository;
  private final BabyRepository babyRepository;

  public Plays findPlaysById(Long id) {
    return playsRepository.findById(id).orElseThrow();
  }

  @Override
  public void registPlays(ActivityPostDto playsPostDto) {
    Baby baby = babyRepository.findById(playsPostDto.getBabyId()).orElseThrow();

    Plays plays = Plays.builder()
        .userId(playsPostDto.getUserId())
        .baby(baby)
        .createdDate(playsPostDto.getCreatedDate())
        .createdTime(playsPostDto.getCreatedTime())
        .endTime(playsPostDto.getEndTime())
        .memo(playsPostDto.getMemo())
        .build();

    playsRepository.save(plays);
  }

  @Override
  public void updatePlays(ActivityPutDto playsPutDto) {
    Plays plays = findPlaysById(playsPutDto.getId());
    plays.updatePlays(playsPutDto.getCreatedTime(), playsPutDto.getEndTime(),
        playsPutDto.getMemo());
  }

  @Override
  public void deletePlays(Long id) {
    Plays plays = findPlaysById(id);
    playsRepository.delete(plays);
  }
}
