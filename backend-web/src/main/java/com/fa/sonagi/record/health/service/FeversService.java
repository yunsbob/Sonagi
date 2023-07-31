package com.fa.sonagi.record.health.service;

import com.fa.sonagi.record.health.dto.FeversPostDto;
import com.fa.sonagi.record.health.dto.FeversPutDto;
import com.fa.sonagi.record.health.entity.Fevers;

public interface FeversService {

  Fevers findFeversById(Long id);

  void registFevers(FeversPostDto feversPostDto);

  void updateFevers(FeversPutDto feversPutDto);

  void deleteFeversById(Long id);

}