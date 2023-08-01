package com.fa.sonagi.record.health.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.health.dto.FeverResDto;
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
  public FeverResDto findFeversById(Long id) {
    Fevers fevers = feversRepository.findById(id).orElseThrow();

    FeverResDto feverResDto = FeverResDto.builder()
        .createdTime(fevers.getCreatedTime())
        .fever(fevers.getFever())
        .memo(fevers.getMemo())
        .build();

    return feverResDto;
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
    Fevers fevers = feversRepository.findById(feversPutDto.getId()).orElseThrow();
    fevers.updateFevers(feversPutDto.getCreatedTime(), feversPutDto.getFever(),
        feversPutDto.getMemo());
  }

  /**
   * 체온 기록 삭제
   */
  @Override
  @Transactional
  public void deleteFeversById(Long id) {
    Fevers fevers = feversRepository.findById(id).orElseThrow();
    feversRepository.delete(fevers);
  }
}