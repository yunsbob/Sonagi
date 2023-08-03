import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { Text } from '@/components/atoms/Text/Text.styles';
import yellowBaby from '@/assets/images/img-baby-yellow.png';
import { Image } from '@/components/atoms/Image/Image';
import * as S from '@/pages/RegisterPage/RegisterPages.styles';
import Back from '@/components/atoms/Back/Back';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '@/states/UserState';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import RegisterButton from '@/components/molecules/RegisterButton/RegisterButton';

import baby from '@/assets/images/img-baby.png';
import babyCard from '@/assets/images/img-baby-card.png';

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
            <RegisterButton
              src={baby}
              buttonText="우리 아이 등록하기"
              // onClick
            />

            <RegisterButton
              src={babyCard}
              buttonText="초대 코드 등록"
              // onClick
            />
          </S.ButtonContainer>
        </S.RegisterPageWrapper>
      </S.RegisterPageContainer>
    </Background>
  );
};

export default RegisterPage;
