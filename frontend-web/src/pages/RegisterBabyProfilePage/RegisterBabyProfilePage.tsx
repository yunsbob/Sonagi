import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { Text } from '@/components/atoms/Text/Text.styles';
import * as S from '@/pages/RegisterBabyProfilePage/RegisterBabyProfilePage.style';
import Back from '@/components/atoms/Back/Back';
import { useState } from 'react';
import RegisterBabyProfile from '@/components/organisms/RegisterBabyProfile/RegisterBabyProfile';
import AddBaby from '@/components/molecules/AddBaby/AddBaby';
import Button from '@/components/atoms/Button/Button';
import theme from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

const RegisterBabyProfilePage = () => {
  const navigate = useNavigate();
  const [babyNum, setBabyNum] = useState(1);

  const regBaby = () => {
    const babies = [];
    for (let i = 0; i < babyNum; i++) {
      babies.push(<RegisterBabyProfile key={i} />);
    }
    return babies;
  };

  const handleBabyNum = () => setBabyNum(prevBabyNum => prevBabyNum + 1);

  const toMain = () => {
    navigate(PATH.MAIN);
  };

  return (
    <Background $background={orangeBackground}>
      <Back />
      <S.RegisterBabyProfilePageContainer>
        <S.RegisterBabyProfilePageWrapper>
          <Text>
            우리 아이의 출생일과
            <br /> 성별, 이름을 입력해주세요
          </Text>
          <S.RegisterBabyProfileWrapper
            className="scrollable"
            style={{ width: '300px' }}
          >
            {regBaby()}
          </S.RegisterBabyProfileWrapper>
          <S.AddBabyWrapper onClick={handleBabyNum}>
            <AddBaby />

            <Button
              option="activated"
              size="medium"
              onClick={toMain}
              style={{ width: '280px', marginTop: '20px' }}
            >
              등록하기
            </Button>
          </S.AddBabyWrapper>
        </S.RegisterBabyProfilePageWrapper>
      </S.RegisterBabyProfilePageContainer>
    </Background>
  );
};

export default RegisterBabyProfilePage;
