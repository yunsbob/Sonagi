import React, { useState } from 'react';
import * as S from '@/pages/FAQForUserPage/FAQForUserPage.styles';
import FAQAccordion from '@/components/molecules/FAQAccordion/FAQAccordion';
import { Text } from '@/components/atoms/Text/Text.styles';
import Back from '@/components/atoms/Back/Back';
import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';

interface FAQItem {
  title: string;
  content: string;
}

interface FAQCategory {
  category: string;
  faqs: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    category: '전체',
    faqs: [],
  },
  {
    category: '회원정보',
    faqs: [
      {
        title: '회원정보 FAQ 1',
        content: '회원정보 FAQ 내용 1',
      },
      {
        title: '회원정보 FAQ 2',
        content: '회원정보 FAQ 내용 2',
      },
      {
        title: '회원정보 FAQ 3',
        content: '회원정보 FAQ 내용 3',
      },
      {
        title: '회원정보 FAQ 4',
        content: '회원정보 FAQ 내용 4',
      },
      // ... 추가적인 회원정보 FAQ 항목들
    ],
  },
  {
    category: '운영정책',
    faqs: [
      {
        title: '운영정책 FAQ 1',
        content: '운영정책 FAQ 내용 1',
      },
      {
        title: '운영정책 FAQ 2',
        content: '운영정책 FAQ 내용 2',
      },
      {
        title: '운영정책 FAQ 3',
        content: '운영정책 FAQ 내용 3',
      },
      {
        title: '운영정책 FAQ 4',
        content: '운영정책 FAQ 내용 4',
      },
      // ... 추가적인 운영정책 FAQ 항목들
    ],
  },
  {
    category: '이용문의',
    faqs: [
      {
        title: '이용문의 FAQ 1',
        content: '이용문의 FAQ 내용 1',
      },
      {
        title: '이용문의 FAQ 2',
        content: '이용문의 FAQ 내용 2',
      },
      {
        title: '이용문의 FAQ 3',
        content: '이용문의 FAQ 내용 3',
      },
      {
        title: '이용문의 FAQ 4',
        content: '이용문의 FAQ 내용 4',
      },
      // ... 추가적인 이용문의 FAQ 항목들
    ],
  },
  {
    category: '기타',
    faqs: [
      {
        title: '기타 FAQ 1',
        content: '기타 FAQ 내용 1',
      },
      {
        title: '기타 FAQ 2',
        content: '기타 FAQ 내용 2',
      },
      {
        title: '기타 FAQ 3',
        content: '기타 FAQ 내용 3',
      },
      {
        title: '기타 FAQ 4',
        content: '기타 FAQ 내용 4',
      },
      // ... 추가적인 기타 FAQ 항목들
    ],
  },
];
const FAQForUserPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <Background $background={orangeBackground}>
        <Back> </Back>
        <S.FAQHeader>
          <Text size={'large'} $fontWeight={900}>
            자주 묻는 질문
          </Text>
        </S.FAQHeader>
        <S.CategoryToggleContainer>
          {faqData.map(category => (
            <S.CategoryToggleButton
              key={category.category}
              onClick={() => handleCategoryClick(category.category)}
              $isSelected={selectedCategory === category.category}
            >
              {category.category}
            </S.CategoryToggleButton>
          ))}
        </S.CategoryToggleContainer>
        <S.FAQContatiner>
          {faqData.map(category => (
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
        </S.FAQContatiner>
      </Background>
    </>
  );
};

export default FAQForUserPage;
