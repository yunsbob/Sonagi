import { Background } from '@/components/atoms/BabyBackground/Background.styles';
import * as React from 'react';
import babyBackground from '@/assets/images/background.png';
import blueBaby from '@/assets/images/img-baby-blue.png';
import Image from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';

const LogInPage = () => {
  return (
    <Background background={babyBackground}>
      <Image src={blueBaby} width={10} />
      <Text size="medium1">소중한 우리 아기를 위한 육아일기</Text>
      <Text size="headXLarge">소나기</Text>
    </Background>
  );
};

export default LogInPage;
