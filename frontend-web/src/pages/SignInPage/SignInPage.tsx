import { Background } from '@/components/atoms/BabyBackground/Background.styles';
import * as React from 'react';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import blueBaby from '@/assets/images/img-baby-blue.png';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import { GoogleLogIn } from '@/components/organisms/GoogleLogIn/GoogleLogIn';

const SignInPage = () => {
  return (
    <Background background={orangeBackground}>
      <Text>signin page</Text>
    </Background>
  );
};

export default SignInPage;
