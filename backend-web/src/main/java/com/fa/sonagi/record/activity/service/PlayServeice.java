package com.fa.sonagi.record.activity.service;

import com.fa.sonagi.record.activity.dto.ActivityPostDto;
import com.fa.sonagi.record.activity.dto.ActivityPutDto;
import com.fa.sonagi.record.activity.entity.Play;

public interface PlayServeice {

  Play findPlayById(Long id);

  void registPlay(ActivityPostDto activityPostDto);

  void updatePlay(ActivityPutDto activityPutDto);

  void deletePlay(Long id);

}
