package com.fa.sonagi.record.diaper.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.diaper.dto.DiaperPostDto;
import com.fa.sonagi.record.diaper.dto.DiaperPutDto;
import com.fa.sonagi.record.diaper.entity.Poops;
import com.fa.sonagi.record.diaper.repository.PoopsRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PoopsServiceImpl implements PoopsService {

  private final PoopsRepository poopsRepository;

  /**
   * 대변 기록 아이디로 조회
   */
  @Override
  public Poops findPoopsById(Long id) {
    return poopsRepository.findById(id).orElseThrow();
  }

  /**
   * 대변 기록 등록
   */
  @Override
  @Transactional
  public void registPoops(DiaperPostDto diaperPostDto) {
    Poops poops = Poops.builder()
        .userId(diaperPostDto.getUserId())
        .babyId(diaperPostDto.getBabyId())
        .createdDate(diaperPostDto.getCreatedDate())
        .createdTime(diaperPostDto.getCreatedTime())
        .memo(diaperPostDto.getMemo())
        .build();

    poopsRepository.save(poops);
  }

  /**
   * 대변 기록 수정
   */
  @Override
  @Transactional
  public void updatePoops(DiaperPutDto diaperPutDto) {
    Poops poops = findPoopsById(diaperPutDto.getId());

    poops.updatePoops(diaperPutDto.getCreatedTime(), diaperPutDto.getMemo());
  }

  /**
   * 대변 기록 삭제
   */
  @Override
  @Transactional
  public void deletePoopsById(Long id) {
    Poops poops = findPoopsById(id);

    poopsRepository.delete(poops);
  }

}