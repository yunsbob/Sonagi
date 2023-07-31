package com.fa.sonagi.record.meal.service;

import com.fa.sonagi.record.meal.dto.FeedingPostDto;
import com.fa.sonagi.record.meal.dto.FeedingPutDto;
import com.fa.sonagi.record.meal.entity.Feeding;

public interface FeedingsService {
  Feeding findFeedingById(Long id);

  void registFeeding(FeedingPostDto feedingPostDto);

  void updateFeeding(FeedingPutDto feedingPutDto);

  void deleteFeedingById(Long id);
}
