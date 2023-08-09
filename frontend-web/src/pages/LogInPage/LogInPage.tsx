import { Background } from '@/components/atoms/Background/Background.styles';
import babyBackground from '@/assets/images/background.png';
import blueBaby from '@/assets/images/img-baby-blue.png';
import google from '@/assets/images/img-logo-google.png';
import kakao from '@/assets/images/img-logo-kakao.png';
import naver from '@/assets/images/img-logo-naver.png';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userFcmTokenState } from '@/states/UserState';

import {
  ButtonContainer,
  LogInPageContainer,
  LogInPageWrapper,
  LogoContainer,
} from '@/pages/LogInPage/LogInPage.styles';
import SocialButton from '@/components/molecules/SocialButton/SocialButton';
import { useEffect } from 'react';

const LogInPage = () => {
  const OAUTH2_REDIERECT_URI = `${process.env.REACT_APP_BASE_URL}/oauth/redirect`;

  const [userFcmToken, setUserFcmToken] = useRecoilState(userFcmTokenState);

  const onSocialButtonClick = (socialName: string) => {
    const AUTH_URL = `${process.env.REACT_APP_SERVER_URL}/api/oauth2/authorization/${socialName}?redirect_uri=${OAUTH2_REDIERECT_URI}`;
    window.location.href = AUTH_URL;
  };

  useEffect(() => {
    const handleMessage = (event: any) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'fcmToken') {
          // Handle the received fcmToken in your React app
          console.log('Received fcmToken from React Native:', data.token);
          // You can now use data.token in your React app
          setUserFcmToken(data.token);
        }
      } catch (error) {
        console.error('Error parsing received data:', error);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [setUserFcmToken]);

  return (
    <Background $background={babyBackground}>
      <LogInPageContainer>
        <LogInPageWrapper>
          <p>{userFcmToken}</p>
          <LogoContainer>
            <Image src={blueBaby} width={11} />
            <Text size="medium1">소중한 우리 아기를 위한 육아일기</Text>
            <Text size="headXLarge">소나기</Text>
          </LogoContainer>
          <ButtonContainer>
            <SocialButton
              src={google}
              buttonText="구글로 로그인하기"
              onClick={() => onSocialButtonClick('google')}
            />
            <SocialButton
              src={kakao}
              buttonText="카카오톡으로 로그인하기"
              onClick={() => onSocialButtonClick('kakao')}
            />
            <SocialButton
              src={naver}
              buttonText="네이버로 로그인하기"
              onClick={() => onSocialButtonClick('naver')}
            />
            {/* <GoogleLogIn o기GoogleSignIn={onGoogleLogIn} /> */}
          </ButtonContainer>
        </LogInPageWrapper>
      </LogInPageContainer>
    </Background>
  );
};

export default LogInPage;
