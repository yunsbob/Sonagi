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
  public void registPlays(ActivityPostDto activityPostDto) {
    Plays plays = Plays.builder()
        .userId(activityPostDto.getUserId())
        .babyId(activityPostDto.getBabyId())
        .createdDate(activityPostDto.getCreatedDate())
        .createdTime(activityPostDto.getCreatedTime())
        .endTime(activityPostDto.getEndTime())
        .memo(activityPostDto.getMemo())
        .build();

    playsRepository.save(plays);
  }

  @Override
  @Transactional
  public void updatePlays(ActivityPutDto activityPutDto) {
    Plays plays = findPlaysById(activityPutDto.getId());
    plays.updatePlays(activityPutDto.getCreatedTime(), activityPutDto.getEndTime(),
        activityPutDto.getMemo());
  }

  @Override
  @Transactional
  public void deletePlays(Long id) {
    Plays plays = findPlaysById(id);
    playsRepository.delete(plays);
  }
}
