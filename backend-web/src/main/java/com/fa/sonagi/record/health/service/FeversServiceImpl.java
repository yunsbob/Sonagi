package com.fa.sonagi.record.health.service;

import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.record.health.dto.FeversPostDto;
import com.fa.sonagi.record.health.dto.FeversPutDto;
import com.fa.sonagi.record.health.entity.Fevers;
import com.fa.sonagi.record.health.repository.FeversRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FeversServiceImpl implements FeversService {

  private final FeversRepository feversRepository;
  private final BabyRepository babyRepository;

  public Fevers findFeversById(Long id) {
    return feversRepository.findById(id).orElseThrow();
  }

  @Override
  public void registFevers(FeversPostDto feversPostDto) {
    Baby baby = babyRepository.findById(feversPostDto.getBabyId()).orElseThrow();

    Fevers fevers = Fevers.builder()
        .userId(feversPostDto.getUserId())
        .baby(baby)
        .createdDate(feversPostDto.getCreatedDate())
        .createdTime(feversPostDto.getCreatedTime())
        .fever(feversPostDto.getFever())
        .memo(feversPostDto.getMemo())
        .build();

    feversRepository.save(fevers);
  }

  @Override
  public void updateFevers(FeversPutDto feversPutDto) {
    Fevers fevers = findFeversById(feversPutDto.getId());
    fevers.updateFevers(feversPutDto.getCreatedTime(), feversPutDto.getFever(),
        feversPutDto.getMemo());
  }

  @Override
  public void deleteFeversById(Long id) {
    Fevers fevers = findFeversById(id);
    feversRepository.delete(fevers);
  }
}