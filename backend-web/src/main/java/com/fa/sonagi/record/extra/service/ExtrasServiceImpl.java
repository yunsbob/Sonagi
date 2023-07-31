package com.fa.sonagi.record.extra.service;

import com.fa.sonagi.record.extra.dto.ExtrasPostDto;
import com.fa.sonagi.record.extra.dto.ExtrasPutDto;
import com.fa.sonagi.record.extra.entity.Extras;
import com.fa.sonagi.record.extra.repository.ExtrasRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ExtrasServiceImpl implements ExtrasService {

  private final ExtrasRepository extrasRepository;

  /**
   * 기타 기록 아이디로 조회
   */
  @Override
  public Extras findExtrasById(Long id) {
    return extrasRepository.findById(id).orElseThrow();
  }

  /**
   * 기타 기록 등록
   */
  @Override
  @Transactional
  public void registExtras(ExtrasPostDto extrasPostDto) {
    Extras extras = Extras.builder()
        .userId(extrasPostDto.getUserId())
        .babyId(extrasPostDto.getBabyId())
        .createdDate(extrasPostDto.getCreatedDate())
        .createdTime(extrasPostDto.getCreatedTime())
        .memo(extrasPostDto.getMemo())
        .build();

    extrasRepository.save(extras);
  }

  /**
   * 기타 기록 수정
   */
  @Override
  @Transactional
  public void updateExtras(ExtrasPutDto extrasPutDto) {
    Extras extras = findExtrasById(extrasPutDto.getId());
    extras.updateExtras(extrasPutDto.getCreatedTime(), extrasPutDto.getMemo());
  }

  /**
   * 기타 기록 삭제
   */
  @Override
  @Transactional
  public void deleteExtras(Long id) {
    Extras extras = findExtrasById(id);
    extrasRepository.delete(extras);
  }
}
