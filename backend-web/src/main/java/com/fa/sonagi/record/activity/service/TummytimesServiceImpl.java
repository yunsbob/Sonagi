package com.fa.sonagi.record.activity.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.activity.dto.ActivityPostDto;
import com.fa.sonagi.record.activity.dto.ActivityPutDto;
import com.fa.sonagi.record.activity.entity.Tummytimes;
import com.fa.sonagi.record.activity.repository.TummytimesRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TummytimesServiceImpl implements TummytimesService {

  private final TummytimesRepository tummytimesRepository;

  /**
   * 터미타임 기록 아이디로 조회
   */
  @Override
  public Tummytimes findTummytimesById(Long id) {
    return tummytimesRepository.findById(id).orElseThrow();
  }

  /**
   * 터미타임 기록 등록
   */
  @Override
  @Transactional
  public void registTummytimes(ActivityPostDto activityPostDto) {
    Tummytimes tummytimes = Tummytimes.builder()
        .userId(activityPostDto.getUserId())
        .babyId(activityPostDto.getBabyId())
        .createdDate(activityPostDto.getCreatedDate())
        .createdTime(activityPostDto.getCreatedTime())
        .endTime(activityPostDto.getEndTime())
        .memo(activityPostDto.getMemo())
        .build();

    tummytimesRepository.save(tummytimes);
  }

  /**
   * 터미타임 기록 수정
   */
  @Override
  @Transactional
  public void updateTummytimes(ActivityPutDto activityPutDto) {
    Tummytimes tummytimes = findTummytimesById(activityPutDto.getId());
    tummytimes.updateTummytimes(activityPutDto.getCreatedTime(), activityPutDto.getEndTime(),
        activityPutDto.getMemo());
  }

  /**
   * 터미타임 기록 삭제
   */
  @Override
  @Transactional
  public void deleteTummytimes(Long id) {
    Tummytimes tummytimes = findTummytimesById(id);
    tummytimesRepository.delete(tummytimes);
  }
}
