import React from 'react';
import DiaryCarousel from '@/components/molecules/DiaryCarousel/DiaryCarousel';
import * as S from '@/components/organisms/DiaryCard/DiaryCard.styles';
import IconMeatballWhite from '@/assets/images/icon-meatball-white.png';
import ImgDiaryWrote from '@/assets/images/img-diary-wrote.png';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';

interface DiaryCardProps {
  writer: string;
  writenDate: string;
  content: string;
  imgUrls: string[];
}

const DiaryCard: React.FC<DiaryCardProps> = ({
  writer,
  writenDate,
  content,
  imgUrls,
}) => {
  return (
    <>
      <S.DiaryCardContainer>
        <S.DiaryEditBtn src={IconMeatballWhite}></S.DiaryEditBtn>
        <DiaryCarousel images={imgUrls}></DiaryCarousel>
        <S.DiaryContentContainer>
          <S.DiaryContentTitle>
            <Image
              src={ImgDiaryWrote}
              width={1.7}
              height={1.7}
              $unit="rem"
            ></Image>
            <Text size={'headSmall'} $fontWeight={500}>
              {writer}
            </Text>
            <Text size="medium2" color={theme.color.gray1}>
              PM {writenDate}
            </Text>
          </S.DiaryContentTitle>
          <S.Divider></S.Divider>
          <Text size="medium2" $fontWeight={400} color={theme.color.black1}>
            {content}
          </Text>
        </S.DiaryContentContainer>
      </S.DiaryCardContainer>
    </>
  );
};

export default DiaryCard;
