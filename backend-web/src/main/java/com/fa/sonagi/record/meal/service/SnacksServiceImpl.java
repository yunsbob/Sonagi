package com.fa.sonagi.record.meal.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.dto.SnackPostDto;
import com.fa.sonagi.record.meal.dto.SnackPutDto;
import com.fa.sonagi.record.meal.entity.PumpingBreast;
import com.fa.sonagi.record.meal.entity.Snack;
import com.fa.sonagi.record.meal.repository.SnacksRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class SnacksServiceImpl implements SnacksService {

  private final SnacksRepository snacksRepository;

  /**
   * 간식 기록 아이디로 조회
   */
  @Override
  public Snack findSnackById(Long id) {
    return snacksRepository.findById(id).orElseThrow();
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

    snacksRepository.save(snack);
  }

  /**
   * 간식 기록 수정
   */
  @Override
  @Transactional
  public void updateSnack(SnackPutDto snackPutDto) {
    Snack snack = findSnackById(snackPutDto.getId());

    snack.updateSnack(snackPutDto.getMemo(), snackPutDto.getCreatedTime());
  }

  /**
   * 간식 기록 삭제
   */
  @Override
  @Transactional
  public void deleteSnackById(Long id) {
    Snack snack = findSnackById(id);

    snacksRepository.delete(snack);
  }
}
