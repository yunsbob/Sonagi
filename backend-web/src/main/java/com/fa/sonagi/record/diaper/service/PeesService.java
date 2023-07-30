package com.fa.sonagi.record.diaper.service;


import com.fa.sonagi.record.diaper.dto.PeesPostDto;
import com.fa.sonagi.record.diaper.dto.PeesPutDto;
import com.fa.sonagi.record.diaper.entity.Pees;

public interface PeesService {

  Pees findPeesById(Long id);

  void registPees(PeesPostDto peesPostDto);

  void updatePees(PeesPutDto peesPutDto);

  void deletePeesById(Long id);
}