import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { Text } from '@/components/atoms/Text/Text.styles';
import family from '@/assets/images/img-family.png';
import { Image } from '@/components/atoms/Image/Image';
import Input from '@/components/atoms/Input/Input';
import * as S from '@/pages/SignInPage/SignInPage.style';
import Back from '@/components/atoms/Back/Back';
import RegisterField from '@/components/molecules/RegisterField/RegisterField';
import { useState } from 'react';
import theme from '@/styles/theme';
import RegisterBabyProfile from '@/components/organisms/RegisterBabyProfile/RegisterBabyProfile';

const SignInPage = () => {
  const [disabled, setDisabled] = useState(true);

  const placeholder = '이름을 입력하세요';

  const alertMessage = '10자 이내로 입력해주세요';

  // const getInputValue = (value: string) => {
  //   if (value.length > 0) {
  //     setDisabled(false);
  //   } else {
  //     setDisabled(true);
  //   }
  // };

  return (
    <Background $background={orangeBackground}>
      <Back />
      <S.SignInPageContainer>
        <S.SignInPageWrapper>
          <Image src={family} width={12} />
          <Text color={'black3'}>
            환영합니다!
            <br />
            이름을 입력해주세요
          </Text>
          <RegisterField
            variant="register"
            size="medium"
            placeholder={placeholder}
            alertMessage={alertMessage}
            $backgroundColor={
              disabled ? theme.color.gray2 : theme.gradient.orangeBtn
            }
          />
        </S.SignInPageWrapper>
      </S.SignInPageContainer>
      <RegisterBabyProfile />
    </Background>
  );
};

export default SignInPage;
