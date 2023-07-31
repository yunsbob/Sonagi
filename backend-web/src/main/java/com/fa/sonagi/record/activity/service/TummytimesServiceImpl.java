package com.fa.sonagi.record.activity.service;

import com.fa.sonagi.record.activity.dto.ActivityPostDto;
import com.fa.sonagi.record.activity.dto.ActivityPutDto;
import com.fa.sonagi.record.activity.entity.Tummytimes;
import com.fa.sonagi.record.activity.repository.TummytimesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TummytimesServiceImpl implements TummytimesService {

  private final TummytimesRepository tummytimesRepository;

  @Override
  public Tummytimes findTummytimesById(Long id) {
    return tummytimesRepository.findById(id).orElseThrow();
  }

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

  @Override
  @Transactional
  public void updateTummytimes(ActivityPutDto activityPutDto) {
    Tummytimes tummytimes = findTummytimesById(activityPutDto.getId());
    tummytimes.updateTummytimes(activityPutDto.getCreatedTime(), activityPutDto.getEndTime(),
        activityPutDto.getMemo());
  }

  @Override
  @Transactional
  public void deleteTummytimes(Long id) {
    Tummytimes tummytimes = findTummytimesById(id);
    tummytimesRepository.delete(tummytimes);
  }
}
