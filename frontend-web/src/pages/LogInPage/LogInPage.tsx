import { Background } from '@/components/atoms/Background/Background.styles';

import babyBackground from '@/assets/images/background.png';
import blueBaby from '@/assets/images/img-baby-blue.png';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import { GoogleLogIn } from '@/components/organisms/GoogleLogIn/GoogleLogIn';
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
    <Background $background={babyBackground}>
      <LogInPageContainer>
        <LogInPageWrapper>
          <LogoContainer>
            <Image src={blueBaby} width={11} />
            <Text size="medium1">소중한 우리 아기를 위한 육아일기</Text>
            <Text size="headXLarge">소나기</Text>
          </LogoContainer>
          <ButtonContainer>
            <Button size="small" $backgroundColor={theme.color.white2}>
              구글로 로그인하기
            </Button>
            <Button size="small" $backgroundColor={theme.color.white2}>
              카카오톡으로 로그인하기
            </Button>
            <Button size="small" $backgroundColor={theme.color.white2}>
              네이버로 로그인하기
            </Button>
            {/* <GoogleLogIn o기GoogleSignIn={onGoogleLogIn} /> */}
          </ButtonContainer>
        </LogInPageWrapper>
      </LogInPageContainer>
    </Background>
  );
};

export default LogInPage;
