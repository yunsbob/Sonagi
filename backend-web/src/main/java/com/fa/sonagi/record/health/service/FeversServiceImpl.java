package com.fa.sonagi.record.health.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.health.dto.FeversPostDto;
import com.fa.sonagi.record.health.dto.FeversPutDto;
import com.fa.sonagi.record.health.entity.Fevers;
import com.fa.sonagi.record.health.repository.FeversRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FeversServiceImpl implements FeversService {

  private final FeversRepository feversRepository;

  /**
   * 체온 기록 아이디로 조회
   */
  @Override
  public Fevers findFeversById(Long id) {
    return feversRepository.findById(id).orElseThrow();
  }

  /**
   * 체온 기록 등록
   */
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

  /**
   * 체온 기록 수정
   */
  @Override
  @Transactional
  public void updateFevers(FeversPutDto feversPutDto) {
    Fevers fevers = findFeversById(feversPutDto.getId());
    fevers.updateFevers(feversPutDto.getCreatedTime(), feversPutDto.getFever(),
        feversPutDto.getMemo());
  }

  /**
   * 체온 기록 삭제
   */
  @Override
  @Transactional
  public void deleteFeversById(Long id) {
    Fevers fevers = findFeversById(id);
    feversRepository.delete(fevers);
  }
}