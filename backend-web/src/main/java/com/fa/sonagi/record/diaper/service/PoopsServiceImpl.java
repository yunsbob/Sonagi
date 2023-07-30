package com.fa.sonagi.record.diaper.service;

import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.record.diaper.dto.PoopsPostDto;
import com.fa.sonagi.record.diaper.dto.PoopsPutDto;
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
  public void registPoops(PoopsPostDto poopsPostDto) {
    Baby baby = babyRepository.findById(poopsPostDto.getBabyId()).orElseThrow();

    Poops poops = Poops.builder()
        .userId(poopsPostDto.getUserId())
        .baby(baby)
        .createdDate(poopsPostDto.getCreatedDate())
        .createdTime(poopsPostDto.getCreatedTime())
        .memo(poopsPostDto.getMemo())
        .build();

    poopsRepository.save(poops);
  }

  @Override
  public void updatePoops(PoopsPutDto poopsPutDto) {
    Poops poops = findPoopsById(poopsPutDto.getId());

    poops.updatePoops(poopsPutDto.getCreatedTime(), poopsPutDto.getMemo());
  }

  @Override
  public void deletePoopsById(Long id) {
    Poops poops = findPoopsById(id);

    poopsRepository.delete(poops);
  }

}