package com.fa.sonagi.record.meal.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fa.sonagi.record.meal.dto.FeedingPostDto;
import com.fa.sonagi.record.meal.dto.FeedingPutDto;
import com.fa.sonagi.record.meal.dto.FeedingResDto;
import com.fa.sonagi.record.meal.entity.Feeding;
import com.fa.sonagi.record.meal.repository.FeedingRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FeedingServiceImpl implements FeedingService {

  private final FeedingRepository feedingRepository;

  /**
   * 수유 기록 아이디로 조회
   */
  @Override
  public FeedingResDto findFeedingById(Long id) {
    Feeding feeding = feedingRepository.findById(id).orElseThrow();

    FeedingResDto feedingResDto = FeedingResDto.builder()
        .id(feeding.getId())
        .leftStartTime(feeding.getLeftStartTime())
        .rightStartTime(feeding.getRightStartTime())
        .leftEndTime(feeding.getLeftEndTime())
        .rightEndTime(feeding.getRightEndTime())
        .memo(feeding.getMemo())
        .build();

    return feedingResDto;
  }

  /**
   * 수유 기록 등록
   */
  @Override
  @Transactional
  public void registFeeding(FeedingPostDto feedingPostDto) {
    Feeding feeding = Feeding.builder()
        .userId(feedingPostDto.getUserId())
        .babyId(feedingPostDto.getBabyId())
        .leftStartTime(feedingPostDto.getLeftStartTime())
        .rightStartTime(feedingPostDto.getRightStartTime())
        .leftEndTime(feedingPostDto.getLeftEndTime())
        .rightEndTime(feedingPostDto.getRightEndTime())
        .createdTime(feedingPostDto.getCreatedTime())
        .createdDate(feedingPostDto.getCreatedDate())
        .memo(feedingPostDto.getMemo())
        .build();

    feedingRepository.save(feeding);
  }

  /**
   * 수유 기록 수정
   */
  @Override
  @Transactional
  public void updateFeeding(FeedingPutDto feedingPutDto) {
    Feeding feeding = feedingRepository.findById(feedingPutDto.getId()).orElseThrow();

    feeding.updateFeeding(feedingPutDto.getLeftStartTime(), feedingPutDto.getRightStartTime(), feedingPutDto.getLeftEndTime(), feedingPutDto.getRightEndTime(), feedingPutDto.getMemo());
  }

  /**
   * 수유 기록 삭제
   */
  @Override
  @Transactional
  public void deleteFeedingById(Long id) {
    Feeding feeding = feedingRepository.findById(id).orElseThrow();

    feedingRepository.delete(feeding);
  }
}
