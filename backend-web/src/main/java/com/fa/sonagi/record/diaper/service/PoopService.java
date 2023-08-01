package com.fa.sonagi.record.diaper.service;

import com.fa.sonagi.record.diaper.dto.DiaperPostDto;
import com.fa.sonagi.record.diaper.dto.DiaperPutDto;
import com.fa.sonagi.record.diaper.entity.Poop;

public interface PoopService {

  Poop findPoopById(Long id);

  void registPoop(DiaperPostDto diaperPostDto);

  void updatePoop(DiaperPutDto diaperPutDto);

  void deletePoopById(Long id);
}