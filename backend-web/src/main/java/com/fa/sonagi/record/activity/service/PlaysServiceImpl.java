package com.fa.sonagi.record.activity.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.activity.dto.ActivityPostDto;
import com.fa.sonagi.record.activity.dto.ActivityPutDto;
import com.fa.sonagi.record.activity.entity.Plays;
import com.fa.sonagi.record.activity.repository.PlaysRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PlaysServiceImpl implements PlaysServeice {

  private final PlaysRepository playsRepository;

  /**
   * 놀이 기록 아이디로 조회
   */
  @Override
  public Plays findPlaysById(Long id) {
    return playsRepository.findById(id).orElseThrow();
  }

  /**
   * 놀이 기록 등록
   */
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

  /**
   * 놀이 기록 수정
   */
  @Override
  @Transactional
  public void updatePlays(ActivityPutDto activityPutDto) {
    Plays plays = findPlaysById(activityPutDto.getId());
    plays.updatePlays(activityPutDto.getCreatedTime(), activityPutDto.getEndTime(),
        activityPutDto.getMemo());
  }

  /**
   * 놀이 기록 삭제
   */
  @Override
  @Transactional
  public void deletePlays(Long id) {
    Plays plays = findPlaysById(id);
    playsRepository.delete(plays);
  }
}
