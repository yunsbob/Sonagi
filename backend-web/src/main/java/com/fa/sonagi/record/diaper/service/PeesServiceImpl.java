package com.fa.sonagi.record.diaper.service;

import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.record.diaper.dto.PeesPostDto;
import com.fa.sonagi.record.diaper.dto.PeesPutDto;
import com.fa.sonagi.record.diaper.entity.Pees;
import com.fa.sonagi.record.diaper.repository.PeesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PeesServiceImpl implements PeesService {

  private final PeesRepository peesRepository;
  private final BabyRepository babyRepository;

  public Pees findPeesById(Long id) {
    return peesRepository.findById(id).orElseThrow();
  }

  @Override
  public void registPees(PeesPostDto peesPostDto) {
    Baby baby = babyRepository.findById(peesPostDto.getBabyId()).orElseThrow();

    Pees pees = Pees.builder()
        .userId(peesPostDto.getUserId())
        .baby(baby)
        .createdDate(peesPostDto.getCreatedDate())
        .createdTime(peesPostDto.getCreatedTime())
        .memo(peesPostDto.getMemo())
        .build();

    peesRepository.save(pees);
  }

  @Override
  public void updatePees(PeesPutDto peesPutDto) {
    Pees pees = findPeesById(peesPutDto.getId());

    pees.updatePees(peesPutDto.getCreatedTime(), peesPutDto.getMemo());
  }

  @Override
  public void deletePeesById(Long id) {
    Pees pees = findPeesById(id);

    peesRepository.delete(pees);
  }
}