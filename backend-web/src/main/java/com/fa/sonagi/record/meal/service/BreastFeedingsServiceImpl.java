package com.fa.sonagi.record.meal.service;

import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.entity.BreastFeeding;
import com.fa.sonagi.record.meal.repository.BreastFeedingsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BreastFeedingsServiceImpl implements BreastFeedingsService {

  private final BreastFeedingsRepository breastFeedingsRepository;

  /**
   * 유축 수유 기록 아이디로 조회
   */
  @Override
  public BreastFeeding findBreastFeedingById(Long id) {
    return breastFeedingsRepository.findById(id).orElseThrow();
  }

  /**
   * 유축 수유 기록 등록
   */
  @Override
  @Transactional
  public void registBreastFeeding(MealPostDto mealPostDto) {
    BreastFeeding breastFeedings = BreastFeeding.builder()
        .userId(mealPostDto.getUserId())
        .babyId(mealPostDto.getBabyId())
        .createdTime(mealPostDto.getCreatedTime())
        .createdDate(mealPostDto.getCreatedDate())
        .amount(mealPostDto.getAmount())
        .memo(mealPostDto.getMemo())
        .build();

    breastFeedingsRepository.save(breastFeedings);
  }

  /**
   * 유축 수유 기록 수정
   */
  @Override
  @Transactional
  public void updateBreastFeeding(MealPutDto mealPutDto) {
    BreastFeeding breastFeedings = findBreastFeedingById(mealPutDto.getId());

    breastFeedings.updateBreastFeeding(mealPutDto.getAmount(), mealPutDto.getMemo(), mealPutDto.getCreatedTime());
  }

  /**
   * 유축 수유 기록 삭제
   */
  @Override
  @Transactional
  public void deleteBreastFeedingById(Long id) {
    BreastFeeding breastFeeding = findBreastFeedingById(id);

    breastFeedingsRepository.delete(breastFeeding);
  }
}
