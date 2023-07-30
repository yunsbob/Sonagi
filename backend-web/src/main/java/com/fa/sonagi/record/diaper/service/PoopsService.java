package com.fa.sonagi.record.diaper.service;

import com.fa.sonagi.record.diaper.dto.PoopsPostDto;
import com.fa.sonagi.record.diaper.dto.PoopsPutDto;
import com.fa.sonagi.record.diaper.entity.Poops;

public interface PoopsService {

  Poops findPoopsById(Long id);

  void registPoops(PoopsPostDto poopsPostDto);

  void updatePoops(PoopsPutDto poopsPutDto);

  void deletePoopsById(Long id);
}