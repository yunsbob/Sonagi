import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { Text } from '@/components/atoms/Text/Text.styles';
import yellowBaby from '@/assets/images/img-baby-yellow.png';
import { Image } from '@/components/atoms/Image/Image';
import * as S from '@/pages/RegisterPage/RegisterPages.styles';
import Back from '@/components/atoms/Back/Back';
import RegisterField from '@/components/molecules/RegisterField/RegisterField';
import Button from '@/components/atoms/Button/Button';
import theme from '@/styles/theme';
import { LogoContainer } from '@/pages/LogInPage/LogInPage.styles';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '@/states/UserState';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
const RegisterPage = () => {
  const userInfo = useRecoilValue(userInfoState);

  const navigate = useNavigate();

  const toBabyCode = () => {
    navigate(PATH.BABYCODE);
  };

  return (
    <Background $background={orangeBackground}>
      <Back />
      <S.RegisterPageContainer>
        <S.RegisterPageWrapper>
          <S.LogoContainer>
            <Image src={yellowBaby} width={10} />
            <Text color={'black3'}>
              {userInfo.name}님의
              <br />
              아이 정보를 추가해주세요
            </Text>
          </S.LogoContainer>
          <S.ButtonContainer>
            <Button
              variant="register"
              size="medium"
              $backgroundColor={theme.gradient.skyblueBtn}
            >
              우리 아기 등록하기
            </Button>
            <Button
              variant="register"
              size="medium"
              $backgroundColor={theme.gradient.orangeBtn}
              onClick={toBabyCode}
              // $backgroundColor={
              //   disabled ? theme.color.gray2 : theme.gradient.orangeBtn
              // }
            >
              등록 코드 입력하기
            </Button>
          </S.ButtonContainer>
        </S.RegisterPageWrapper>
      </S.RegisterPageContainer>
    </Background>
  );
};

export default RegisterPage;
