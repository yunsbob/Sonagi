package com.fa.sonagi.record.extra.service;

import com.fa.sonagi.record.activity.dto.ActivityPostDto;
import com.fa.sonagi.record.activity.dto.ActivityPutDto;
import com.fa.sonagi.record.activity.entity.Plays;
import com.fa.sonagi.record.extra.dto.ExtrasPostDto;
import com.fa.sonagi.record.extra.dto.ExtrasPutDto;
import com.fa.sonagi.record.extra.entity.Extras;

public interface ExtrasService {

  Extras findExtrasById(Long id);

  void registExtras(ExtrasPostDto extrasPostDto);

  void updateExtras(ExtrasPutDto extrasPutDto);

  void deleteExtras(Long id);
}
