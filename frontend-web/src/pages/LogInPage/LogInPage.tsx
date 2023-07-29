import { Background } from '@/components/atoms/BabyBackground/Background.styles';
import * as React from 'react';
import babyBackground from '@/assets/images/background.png';
import blueBaby from '@/assets/images/img-baby-blue.png';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import { GoogleLogIn } from '@/components/organisms/GoogleLogIn/GoogleLogIn';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

const LogInPage = () => {
  const navigate = useNavigate();

  const onGoogleLogIn = (res: CredentialResponse) => {
    const { credential } = res;
    if (credential) {
      console.log(res.credential);
      navigate(PATH.SIGNIN);
    }
  };

  return (
    <Background background={babyBackground}>
      <Image src={blueBaby} width={10} />
      <Text size="medium1">소중한 우리 아기를 위한 육아일기</Text>
      <Text size="headXLarge">소나기</Text>
      <GoogleLogIn onGoogleSignIn={onGoogleLogIn} />
    </Background>
  );
};

export default LogInPage;
