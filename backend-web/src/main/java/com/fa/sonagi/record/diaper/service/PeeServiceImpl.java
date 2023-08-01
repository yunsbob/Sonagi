package com.fa.sonagi.record.diaper.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.diaper.dto.DiaperPostDto;
import com.fa.sonagi.record.diaper.dto.DiaperPutDto;
import com.fa.sonagi.record.diaper.entity.Pee;
import com.fa.sonagi.record.diaper.repository.PeeRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PeeServiceImpl implements PeeService {

  private final PeeRepository peeRepository;

  /**
   * 소변 기록 아이디로 조회
   */
  @Override
  public Pee findPeeById(Long id) {
    return peeRepository.findById(id).orElseThrow();
  }

  /**
   * 소변 기록 등록
   */
  @Override
  @Transactional
  public void registPee(DiaperPostDto diaperPostDto) {
    Pee pee = Pee.builder()
        .userId(diaperPostDto.getUserId())
        .babyId(diaperPostDto.getBabyId())
        .createdDate(diaperPostDto.getCreatedDate())
        .createdTime(diaperPostDto.getCreatedTime())
        .memo(diaperPostDto.getMemo())
        .build();

    peeRepository.save(pee);
  }

  /**
   * 소변 기록 수정
   */
  @Override
  @Transactional
  public void updatePee(DiaperPutDto diaperPutDto) {
    Pee pee = findPeeById(diaperPutDto.getId());

    pee.updatePee(diaperPutDto.getCreatedTime(), diaperPutDto.getMemo());
  }

  /**
   * 소변 기록 삭제
   */
  @Override
  @Transactional
  public void deletePeeById(Long id) {
    Pee pee = findPeeById(id);

    peeRepository.delete(pee);
  }
}