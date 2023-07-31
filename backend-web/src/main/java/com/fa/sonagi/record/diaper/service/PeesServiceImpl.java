package com.fa.sonagi.record.diaper.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.diaper.dto.DiaperPostDto;
import com.fa.sonagi.record.diaper.dto.DiaperPutDto;
import com.fa.sonagi.record.diaper.entity.Pees;
import com.fa.sonagi.record.diaper.repository.PeesRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PeesServiceImpl implements PeesService {

  private final PeesRepository peesRepository;

  /**
   * 소변 기록 아이디로 조회
   */
  @Override
  public Pees findPeesById(Long id) {
    return peesRepository.findById(id).orElseThrow();
  }

  /**
   * 소변 기록 등록
   */
  @Override
  @Transactional
  public void registPees(DiaperPostDto diaperPostDto) {
    Pees pees = Pees.builder()
        .userId(diaperPostDto.getUserId())
        .babyId(diaperPostDto.getBabyId())
        .createdDate(diaperPostDto.getCreatedDate())
        .createdTime(diaperPostDto.getCreatedTime())
        .memo(diaperPostDto.getMemo())
        .build();

    peesRepository.save(pees);
  }

  /**
   * 소변 기록 수정
   */
  @Override
  @Transactional
  public void updatePees(DiaperPutDto diaperPutDto) {
    Pees pees = findPeesById(diaperPutDto.getId());

    pees.updatePees(diaperPutDto.getCreatedTime(), diaperPutDto.getMemo());
  }

  /**
   * 소변 기록 삭제
   */
  @Override
  @Transactional
  public void deletePeesById(Long id) {
    Pees pees = findPeesById(id);

    peesRepository.delete(pees);
  }
}