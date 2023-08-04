package com.fa.sonagi.record.extra.repository;

import com.fa.sonagi.record.extra.dto.ExtraResDto;

public interface ExtraRepositoryCustom {
	ExtraResDto findExtraRecord(Long extraId);
}
