package com.fa.sonagi.record.meal.service;

import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.record.meal.dto.MealPostDto;
import com.fa.sonagi.record.meal.dto.MealPutDto;
import com.fa.sonagi.record.meal.entity.BreastFeeding;
import com.fa.sonagi.record.meal.repository.BreastFeedingsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BreastFeedingsServiceImpl implements BreastFeedingsService {

  private final BreastFeedingsRepository breastFeedingRepository;
  private final BabyRepository babyRepository;

  @Override
  public BreastFeeding findBreastFeedingById(Long id) {
    return breastFeedingRepository.findById(id).orElseThrow();
  }

  @Override
  public void registBreastFeeding(MealPostDto mealPostDto) {
    Baby baby = babyRepository.findById(mealPostDto.getBabyId()).orElseThrow();

    BreastFeeding breastFeedings = BreastFeeding.builder()
        .userId(mealPostDto.getUserId())
        .baby(baby)
        .createdTime(mealPostDto.getCreatedTime())
        .createdDate(mealPostDto.getCreatedDate())
        .amount(mealPostDto.getAmount())
        .memo(mealPostDto.getMemo())
        .build();

    breastFeedingRepository.save(breastFeedings);
  }

  @Override
  public void updateBreastFeeding(MealPutDto mealPutDto) {
    BreastFeeding breastFeedings = findBreastFeedingById(mealPutDto.getId());

    breastFeedings.updateBreastFeeding(mealPutDto.getAmount(), mealPutDto.getMemo(), mealPutDto.getCreatedTime());
  }

  @Override
  public void deleteBreastFeedingById(Long id) {
    BreastFeeding breastFeeding = findBreastFeedingById(id);

    breastFeedingRepository.delete(breastFeeding);
  }
}
