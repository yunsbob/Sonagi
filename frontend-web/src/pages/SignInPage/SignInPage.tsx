import { Background } from '@/components/atoms/BabyBackground/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { Text } from '@/components/atoms/Text/Text.styles';
import family from '@/assets/images/img-family.png';
import { Image } from '@/components/atoms/Image/Image';
import Input from '@/components/atoms/Input/Input';
import { SignInPageContainer } from '@/pages/SignInPage/SignInPage.style';
import Back from '@/components/atoms/Back/Back';

const SignInPage = () => {
  const alertMessage = '10자 이내로 작성해주세요.';

  const testFunc = (value: string) => {
    console.log('부모에서 출력' + value);
  };

  return (
    <Background background={orangeBackground}>
      <Back></Back>
      <SignInPageContainer>
        <Image src={family} width={12} />
        <Text color={'black3'}>환영합니다!</Text>
        <Text color={'black3'}>이름을 입력해주세요</Text>
        <Input
          testFunc={testFunc}
          placeholder="이름을 입력하세요"
          alertMessage={alertMessage}
        />
      </SignInPageContainer>
    </Background>
  );
};

export default SignInPage;
