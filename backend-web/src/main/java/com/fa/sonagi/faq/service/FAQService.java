package com.fa.sonagi.faq.service;

import com.fa.sonagi.faq.dto.FAQPostDto;
import com.fa.sonagi.faq.dto.FAQPutDto;
import com.fa.sonagi.faq.dto.FAQResDto;

public interface FAQService {
	FAQResDto findFAQById(Long FAQId);

	void registFAQ(FAQPostDto faqPostDto);

	void updateFAQ(FAQPutDto faqPutDto);

	void deleteFAQ(Long FAQId);
}
