import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { Text } from '@/components/atoms/Text/Text.styles';
import family from '@/assets/images/img-family.png';
import { Image } from '@/components/atoms/Image/Image';
import * as S from '@/pages/SignInPage/SignInPage.style';
import Back from '@/components/atoms/Back/Back';
import RegisterField from '@/components/molecules/RegisterField/RegisterField';
const SignInPage = () => {
  const placeholder = '이름을 입력하세요';

  const alertMessage = '10자 이내로 입력해주세요';

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
          />
        </S.SignInPageWrapper>
      </S.SignInPageContainer>
    </Background>
  );
};

export default SignInPage;
