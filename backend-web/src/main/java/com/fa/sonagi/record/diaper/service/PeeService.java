package com.fa.sonagi.record.diaper.service;


import com.fa.sonagi.record.diaper.dto.DiaperPostDto;
import com.fa.sonagi.record.diaper.dto.DiaperPutDto;
import com.fa.sonagi.record.diaper.entity.Pee;

public interface PeeService {

  Pee findPeeById(Long id);

  void registPee(DiaperPostDto diaperPostDto);

  void updatePee(DiaperPutDto diaperPutDto);

  void deletePeeById(Long id);
}