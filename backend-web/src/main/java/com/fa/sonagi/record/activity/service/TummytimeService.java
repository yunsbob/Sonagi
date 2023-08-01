package com.fa.sonagi.record.activity.service;

import com.fa.sonagi.record.activity.dto.ActivityPostDto;
import com.fa.sonagi.record.activity.dto.ActivityPutDto;
import com.fa.sonagi.record.activity.entity.Tummytime;

public interface TummytimeService {

  Tummytime findTummytimeById(Long id);

  void registTummytime(ActivityPostDto activityPostDto);

  void updateTummytime(ActivityPutDto activityPutDto);

  void deleteTummytime(Long id);
}
