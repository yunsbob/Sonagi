package com.fa.sonagi.record.health.service;

import com.fa.sonagi.record.health.dto.FeverResDto;
import com.fa.sonagi.record.health.dto.FeversPostDto;
import com.fa.sonagi.record.health.dto.FeversPutDto;

public interface FeversService {

  FeverResDto findFeversById(Long id);

  void registFevers(FeversPostDto feversPostDto);

  void updateFevers(FeversPutDto feversPutDto);

  void deleteFeversById(Long id);

}