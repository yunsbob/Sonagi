import { Background } from '@/components/atoms/Background/Background.styles';
import babyBackground from '@/assets/images/background.png';
import blueBaby from '@/assets/images/img-baby-blue.png';
import google from '@/assets/images/img-logo-google.png';
import kakao from '@/assets/images/img-logo-kakao.png';
import naver from '@/assets/images/img-logo-naver.png';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import Cookies from 'js-cookie';
import {
  ButtonContainer,
  LogInPageContainer,
  LogInPageWrapper,
  LogoContainer,
} from '@/pages/LogInPage/LogInPage.styles';
import SocialButton from '@/components/molecules/SocialButton/SocialButton';
// import { useEffect } from 'react';

const LogInPage = () => {
  const OAUTH2_REDIERECT_URI = `${process.env.REACT_APP_BASE_URL}/oauth/redirect`;
  const onSocialButtonClick = (socialName: string) => {
    const AUTH_URL = `${process.env.REACT_APP_SERVER_URL}/api/oauth2/authorization/${socialName}?redirect_uri=${OAUTH2_REDIERECT_URI}`;
    window.location.href = AUTH_URL;
  };

  const saveAndroidTokenToCookie = () => {
    // React Native 알림을 위한 기기 Token값 저장
    document.addEventListener('message', (e: any) => {
      console.log('hi2');
      const androidToken = e.data;
      console.log(androidToken);

      if (androidToken) {
        console.log('saveToken');
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 60);

        Cookies.set('androidToken', androidToken, {
          path: '/',
          expires: expires,
          secure: true,
          // httpOnly: true,
        });
      }
    });
  };
  saveAndroidTokenToCookie();

  return (
    <Background $background={babyBackground}>
      <LogInPageContainer>
        <LogInPageWrapper>
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
