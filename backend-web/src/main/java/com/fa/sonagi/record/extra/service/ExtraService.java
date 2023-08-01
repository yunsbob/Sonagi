package com.fa.sonagi.record.extra.service;

import com.fa.sonagi.record.extra.dto.ExtraPostDto;
import com.fa.sonagi.record.extra.dto.ExtraPutDto;
import com.fa.sonagi.record.extra.entity.Extra;

public interface ExtraService {

  Extra findExtraById(Long id);

  void registExtra(ExtraPostDto extraPostDto);

  void updateExtra(ExtraPutDto extraPutDto);

  void deleteExtra(Long id);
}
