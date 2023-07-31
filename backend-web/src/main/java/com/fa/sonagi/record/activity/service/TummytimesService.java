package com.fa.sonagi.record.activity.service;

import com.fa.sonagi.record.activity.dto.ActivityPostDto;
import com.fa.sonagi.record.activity.dto.ActivityPutDto;
import com.fa.sonagi.record.activity.entity.Tummytimes;

public interface TummytimesService {

  Tummytimes findTummytimesById(Long id);

  void registTummytimes(ActivityPostDto activityPostDto);

  void updateTummytimes(ActivityPutDto activityPutDto);

  void deleteTummytimes(Long id);
}
