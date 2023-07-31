package com.fa.sonagi.record.diaper.service;

import com.fa.sonagi.baby.entity.Baby;
import com.fa.sonagi.baby.repository.BabyRepository;
import com.fa.sonagi.record.diaper.dto.DiaperPostDto;
import com.fa.sonagi.record.diaper.dto.DiaperPutDto;
import com.fa.sonagi.record.diaper.entity.Pees;
import com.fa.sonagi.record.diaper.repository.PeesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PeesServiceImpl implements PeesService {

  private final PeesRepository peesRepository;

  @Override
  public Pees findPeesById(Long id) {
    return peesRepository.findById(id).orElseThrow();
  }

  @Override
  @Transactional
  public void registPees(DiaperPostDto diaperPostDto) {
    Pees pees = Pees.builder()
        .userId(diaperPostDto.getUserId())
        .babyId(diaperPostDto.getBabyId())
        .createdDate(diaperPostDto.getCreatedDate())
        .createdTime(diaperPostDto.getCreatedTime())
        .memo(diaperPostDto.getMemo())
        .build();

    peesRepository.save(pees);
  }

  @Override
  @Transactional
  public void updatePees(DiaperPutDto peesPutDto) {
    Pees pees = findPeesById(peesPutDto.getId());

    pees.updatePees(peesPutDto.getCreatedTime(), peesPutDto.getMemo());
  }

  @Override
  @Transactional
  public void deletePeesById(Long id) {
    Pees pees = findPeesById(id);

    peesRepository.delete(pees);
  }
}