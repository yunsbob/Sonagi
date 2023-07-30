package com.fa.sonagi.record.diaper.service;

import com.fa.sonagi.record.diaper.dto.DiaperPostDto;
import com.fa.sonagi.record.diaper.dto.DiaperPutDto;
import com.fa.sonagi.record.diaper.entity.Poops;

public interface PoopsService {

  Poops findPoopsById(Long id);

  void registPoops(DiaperPostDto diaperPostDto);

  void updatePoops(DiaperPutDto diaperPutDto);

  void deletePoopsById(Long id);
}