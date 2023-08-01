package com.fa.sonagi.record.meal.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.meal.dto.SnackPostDto;
import com.fa.sonagi.record.meal.dto.SnackPutDto;
import com.fa.sonagi.record.meal.dto.SnackResDto;
import com.fa.sonagi.record.meal.entity.Snack;
import com.fa.sonagi.record.meal.repository.SnackRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class SnackServiceImpl implements SnackService {

  private final SnackRepository snackRepository;

  /**
   * 간식 기록 아이디로 조회
   */
  @Override
  public SnackResDto findSnackById(Long id) {
    Snack snack = snackRepository.findById(id).orElseThrow();

    SnackResDto snackResDto = SnackResDto.builder()
        .id(snack.getId())
        .memo(snack.getMemo())
        .createdTime(snack.getCreatedTime())
        .build();

    return snackResDto;
  }

  /**
   * 간식 기록 등록
   */
  @Override
  @Transactional
  public void registSnack(SnackPostDto snackPostDto) {
    Snack snack = Snack.builder()
        .userId(snackPostDto.getUserId())
        .babyId(snackPostDto.getBabyId())
        .createdTime(snackPostDto.getCreatedTime())
        .createdDate(snackPostDto.getCreatedDate())
        .memo(snackPostDto.getMemo())
        .build();

    snackRepository.save(snack);
  }

  /**
   * 간식 기록 수정
   */
  @Override
  @Transactional
  public void updateSnack(SnackPutDto snackPutDto) {
    Snack snack = snackRepository.findById(snackPutDto.getId()).orElseThrow();

    snack.updateSnack(snackPutDto.getMemo(), snackPutDto.getCreatedTime());
  }

  /**
   * 간식 기록 삭제
   */
  @Override
  @Transactional
  public void deleteSnackById(Long id) {
    Snack snack = snackRepository.findById(id).orElseThrow();

    snackRepository.delete(snack);
  }
}
