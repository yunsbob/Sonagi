package com.fa.sonagi.record.diaper.service;

import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.record.diaper.dto.DiaperPostDto;
import com.fa.sonagi.record.diaper.dto.DiaperPutDto;
import com.fa.sonagi.record.diaper.entity.Poops;
import com.fa.sonagi.record.diaper.repository.PoopsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PoopsServiceImpl implements PoopsService {

  private final PoopsRepository poopsRepository;

  @Override
  public Poops findPoopsById(Long id) {
    return poopsRepository.findById(id).orElseThrow();
  }

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

  @Override
  @Transactional
  public void updatePoops(DiaperPutDto diaperPutDto) {
    Poops poops = findPoopsById(diaperPutDto.getId());

    poops.updatePoops(diaperPutDto.getCreatedTime(), diaperPutDto.getMemo());
  }

  @Override
  @Transactional
  public void deletePoopsById(Long id) {
    Poops poops = findPoopsById(id);

    poopsRepository.delete(poops);
  }

}