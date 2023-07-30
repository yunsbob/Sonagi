package com.fa.sonagi.record.diaper.service;


import com.fa.sonagi.record.diaper.dto.DiaperPostDto;
import com.fa.sonagi.record.diaper.dto.DiaperPutDto;
import com.fa.sonagi.record.diaper.entity.Pees;

public interface PeesService {

  Pees findPeesById(Long id);

  void registPees(DiaperPostDto peesPostDto);

  void updatePees(DiaperPutDto peesPutDto);

  void deletePeesById(Long id);
}