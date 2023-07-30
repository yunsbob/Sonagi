package com.fa.sonagi.record.diaper.service;

import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.record.diaper.dto.DiaperPostDto;
import com.fa.sonagi.record.diaper.dto.DiaperPutDto;
import com.fa.sonagi.record.diaper.entity.Poops;
import com.fa.sonagi.record.diaper.repository.PoopsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PoopsServiceImpl implements PoopsService {

  private final PoopsRepository poopsRepository;
  private final BabyRepository babyRepository;

  public Poops findPoopsById(Long id) {
    return poopsRepository.findById(id).orElseThrow();
  }

  @Override
  public void registPoops(DiaperPostDto diaperPostDto) {
    Baby baby = babyRepository.findById(diaperPostDto.getBabyId()).orElseThrow();

    Poops poops = Poops.builder()
        .userId(diaperPostDto.getUserId())
        .baby(baby)
        .createdDate(diaperPostDto.getCreatedDate())
        .createdTime(diaperPostDto.getCreatedTime())
        .memo(diaperPostDto.getMemo())
        .build();

    poopsRepository.save(poops);
  }

  @Override
  public void updatePoops(DiaperPutDto diaperPutDto) {
    Poops poops = findPoopsById(diaperPutDto.getId());

    poops.updatePoops(diaperPutDto.getCreatedTime(), diaperPutDto.getMemo());
  }

  @Override
  public void deletePoopsById(Long id) {
    Poops poops = findPoopsById(id);

    poopsRepository.delete(poops);
  }

}