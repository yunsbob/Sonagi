package com.fa.sonagi.record.activity.service;

import com.fa.sonagi.record.activity.dto.ActivityPostDto;
import com.fa.sonagi.record.activity.dto.ActivityPutDto;
import com.fa.sonagi.record.activity.entity.Plays;
import com.fa.sonagi.record.activity.repository.PlaysRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PlaysServiceImpl implements PlaysServeice {

  private final PlaysRepository playsRepository;

  @Override
  public Plays findPlaysById(Long id) {
    return playsRepository.findById(id).orElseThrow();
  }

  @Override
  @Transactional
  public void registPlays(ActivityPostDto playsPostDto) {
    Plays plays = Plays.builder()
        .userId(playsPostDto.getUserId())
        .babyId(playsPostDto.getBabyId())
        .createdDate(playsPostDto.getCreatedDate())
        .createdTime(playsPostDto.getCreatedTime())
        .endTime(playsPostDto.getEndTime())
        .memo(playsPostDto.getMemo())
        .build();

    playsRepository.save(plays);
  }

  @Override
  @Transactional
  public void updatePlays(ActivityPutDto playsPutDto) {
    Plays plays = findPlaysById(playsPutDto.getId());
    plays.updatePlays(playsPutDto.getCreatedTime(), playsPutDto.getEndTime(),
        playsPutDto.getMemo());
  }

  @Override
  @Transactional
  public void deletePlays(Long id) {
    Plays plays = findPlaysById(id);
    playsRepository.delete(plays);
  }
}
