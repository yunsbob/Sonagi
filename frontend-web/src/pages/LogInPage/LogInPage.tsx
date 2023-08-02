import { Background } from '@/components/atoms/Background/Background.styles';

import babyBackground from '@/assets/images/background.png';
import blueBaby from '@/assets/images/img-baby-blue.png';
import google from '@/assets/images/img-logo-google.png';
import kakao from '@/assets/images/img-logo-kakao.png';
import naver from '@/assets/images/img-logo-naver.png';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import Button from './../../components/atoms/Button/Button';
import {
  ButtonContainer,
  LogInPageContainer,
  LogInPageWrapper,
  LogoContainer,
} from '@/pages/LogInPage/LogInPage.styles';
import theme from '@/styles/theme';
import SocialButton from '@/components/molecules/SocialButton/SocialButton';

const LogInPage = () => {
  const navigate = useNavigate();

  const OAUTH2_REDIERECT_URI = 'http://localhost:3000/oauth/redirect';

  const GOOGLE_AUTH_URL = `${process.env.REACT_APP_SERVER_URL}/api/oauth2/authorization/naver?redirect_uri=${OAUTH2_REDIERECT_URI}`;

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
            <a href={GOOGLE_AUTH_URL}>rr</a>
            <SocialButton src={google} buttonText="구글로 로그인하기" />
            <SocialButton src={kakao} buttonText="카카오톡으로 로그인하기" />
            <SocialButton src={naver} buttonText="네이버로 로그인하기" />
            {/* <GoogleLogIn o기GoogleSignIn={onGoogleLogIn} /> */}
          </ButtonContainer>
        </LogInPageWrapper>
      </LogInPageContainer>
    </Background>
  );
};

export default LogInPage;
