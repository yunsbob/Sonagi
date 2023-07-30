package com.fa.sonagi.record.health.service;

import com.fa.sonagi.record.health.dto.FeversPostDto;
import com.fa.sonagi.record.health.dto.FeversPutDto;
import com.fa.sonagi.record.health.entity.Fevers;
import com.fa.sonagi.record.health.repository.FeversRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FeversServiceImpl implements FeversService {

  private final FeversRepository feversRepository;

  @Override
  public Fevers findFeversById(Long id) {
    return feversRepository.findById(id).orElseThrow();
  }

  @Override
  @Transactional
  public void registFevers(FeversPostDto feversPostDto) {
    Fevers fevers = Fevers.builder()
        .userId(feversPostDto.getUserId())
        .babyId(feversPostDto.getBabyId())
        .createdDate(feversPostDto.getCreatedDate())
        .createdTime(feversPostDto.getCreatedTime())
        .fever(feversPostDto.getFever())
        .memo(feversPostDto.getMemo())
        .build();

    feversRepository.save(fevers);
  }

  @Override
  @Transactional
  public void updateFevers(FeversPutDto feversPutDto) {
    Fevers fevers = findFeversById(feversPutDto.getId());
    fevers.updateFevers(feversPutDto.getCreatedTime(), feversPutDto.getFever(),
        feversPutDto.getMemo());
  }

  @Override
  @Transactional
  public void deleteFeversById(Long id) {
    Fevers fevers = findFeversById(id);
    feversRepository.delete(fevers);
  }
}