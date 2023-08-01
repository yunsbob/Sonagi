package com.fa.sonagi.record.meal.service;

import com.fa.sonagi.record.meal.dto.SnackPostDto;
import com.fa.sonagi.record.meal.dto.SnackPutDto;
import com.fa.sonagi.record.meal.dto.SnackResDto;

public interface SnacksService {
  SnackResDto findSnackById(Long id);

  void registSnack(SnackPostDto snackPostDto);

  void updateSnack(SnackPutDto snackPutDto);

  void deleteSnackById(Long id);
}
