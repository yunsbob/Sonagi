import React, { useState } from 'react';
import { Text } from '@/components/atoms/Text/Text.styles';
import * as S from '@/components/organisms/BabyPersonalInfoContainer/BabyPersonalInfoContainer.style';
import { BabyPersonalInfoButton } from '@/components/molecules/BabyPersonalInfoButton/BabyPersonalInfoButton';
import Button from '@/components/atoms/Button/Button';

interface BabyPersonalInfoProps {
  isDisease: boolean;
}

interface BabyPersonalInfoArrayProps {
  memo: string;
  name: string;
}

const BabyPersonalInfoContainer: React.FC<BabyPersonalInfoProps> = ({
  isDisease,
}) => {
  const disease =
    '우리 아이는 이러한 <span style="font-weight: 700">질병/알러지</span>등이 있어요';

  const info =
    '우리 아이를 돌봐주실 땐 <span style="font-weight: 700">이런 점을 주의해주세요</span>';

  // const BabyPersonalInfoArray = [{ memo: 'memo1', name: 'name1' }];
  const BabyPersonalInfoArray: BabyPersonalInfoArrayProps[] = [];

  const BabyPersonalInfoButtonHandler = () => {
    return BabyPersonalInfoArray.map((data, index) => (
      <BabyPersonalInfoButton key={index} memo={data.memo} name={data.name} />
    ));
  };

  return (
    <S.BPICContainer>
      <Text
        size="medium1"
        dangerouslySetInnerHTML={{ __html: isDisease ? disease : info }}
        style={{ marginBottom: '10px' }}
      />
      <div style={{ display: 'flex', gap: '15px', overflow: 'auto' }}>
        {BabyPersonalInfoButtonHandler()}
        <Button style={{ height: '150px', width: '130px' }} onClick={() => {}}>
          {' '}
          추가 버튼
        </Button>
      </div>
    </S.BPICContainer>
  );
};

export default BabyPersonalInfoContainer;
