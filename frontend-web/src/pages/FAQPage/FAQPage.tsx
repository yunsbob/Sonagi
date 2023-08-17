import React, { useState, useEffect } from 'react';
import * as S from '@/pages/FAQForUserPage/FAQForUserPage.styles';
import FAQAccordion from '@/components/molecules/FAQAccordion/FAQAccordion';
import { Text } from '@/components/atoms/Text/Text.styles';
import Back from '@/components/atoms/Back/Back';
import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { instance } from '@/apis/instance'; // instance import 경로에 맞게 수정

interface FAQItem {
  title: string;
  content: string;
}

interface FAQCategory {
  category: string;
  faqs: FAQItem[];
}

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [currentPost, setCurrentPost] = useState<FAQCategory[]>([]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const getFAQList = async () => {
    try {
      const response = await instance.get(`/faqs`);
      return response.data;
    } catch (error) {
      throw new Error('no data returned from the API - FAQ');
    }
  };

  useEffect(() => {
    getFAQList()
      .then(faqList => {
        setCurrentPost([
          {
            category: '전체',
            faqs: faqList,
          },
          {
            category: '회원정보',
            faqs: [],
          },
          {
            category: '운영정책',
            faqs: [],
          },
          {
            category: '이용문의',
            faqs: [],
          },
          {
            category: '기타',
            faqs: [],
          },
        ]);
      })
      .catch(error => {
        console.error('FAQ 데이터 가져오기 실패:', error);
      });
  }, []);

  return (
    <>
      <S.FAQHeader>
        <Text size={'large'} $fontWeight={900}>
          자주 묻는 질문
        </Text>
      </S.FAQHeader>
      <S.CategoryToggleContainer>
        {currentPost.map(category => (
          <S.CategoryToggleButton
            key={category.category}
            onClick={() => handleCategoryClick(category.category)}
            isSelected={selectedCategory === category.category}
          >
            {category.category}
          </S.CategoryToggleButton>
        ))}
      </S.CategoryToggleContainer>
      <S.AdminFAQContainer>
        {currentPost.map(category => (
          <div key={category.category}>
            {category.faqs.map(faq => (
              <FAQAccordion
                key={faq.title}
                title={faq.title}
                content={faq.content}
                isVisible={
                  selectedCategory === '전체' ||
                  selectedCategory === category.category
                }
              />
            ))}
          </div>
        ))}
      </S.AdminFAQContainer>
    </>
  );
};

export default FAQPage;
