import { Text } from '@/components/atoms/Text/Text.styles';
import Button from '@/components/atoms/Button/Button';
import theme from '@/styles/theme';
import * as S from '@/components/molecules/BreastFeedRecorder/BreastFeedRecorder.style';
import LeftBreast from '@/assets/images/img-breast-left.png';
import RightBreast from '@/assets/images/img-breast-right.png';
import { Image } from '@/components/atoms/Image/Image';
import { useState } from 'react';

const BreastFeed = () => {
  const [isLeft, setIsLeft] = useState(true);

  const leftHandler = () => {
    setIsLeft(true);
  };
  const rightHandler = () => {
    setIsLeft(false);
  };

  return (
    <>
      <S.BreastFeedTextWrapper>
        <Text size={'headSmall'}>수유 방향</Text>
      </S.BreastFeedTextWrapper>
      <S.BreastFeedWrapper>
        <Button
          size="xLarge"
          $borderColor={isLeft ? theme.color.categoryMeal : null}
          $backgroundColor={isLeft ? null : theme.color.lightgrey}
          style={{
            filter: isLeft ? undefined : 'grayscale(100%)',
          }}
          $borderRadius="14px"
          onClick={leftHandler}
        >
          <S.ButtonWrapper>
            <Text size="medium1">왼쪽</Text>
            <Image src={LeftBreast} width={53} $unit="px"></Image>
          </S.ButtonWrapper>
        </Button>
        <Button
          size="xLarge"
          $borderColor={!isLeft ? theme.color.categoryMeal : null}
          $backgroundColor={!isLeft ? null : theme.color.lightgrey}
          style={{
            filter: !isLeft ? undefined : 'grayscale(100%)',
          }}
          $borderRadius="14px"
          onClick={rightHandler}
        >
          <S.ButtonWrapper>
            <Text size="medium1">오른쪽</Text>
            <Image src={RightBreast} width={53} $unit="px"></Image>
          </S.ButtonWrapper>
        </Button>
      </S.BreastFeedWrapper>
    </>
  );
};

export default BreastFeed;
