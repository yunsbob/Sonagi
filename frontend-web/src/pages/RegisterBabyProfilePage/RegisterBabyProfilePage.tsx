import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { Text } from '@/components/atoms/Text/Text.styles';
import * as S from '@/pages/RegisterBabyProfilePage/RegisterBabyProfilePage.style';
import Back from '@/components/atoms/Back/Back';
import { useState, useCallback, useEffect } from 'react';
import RegisterBabyProfile from '@/components/organisms/RegisterBabyProfile/RegisterBabyProfile';
import AddBaby from '@/components/molecules/AddBaby/AddBaby';
import Button from '@/components/atoms/Button/Button';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { useAddBaby } from '@/apis/Baby/Mutations/useAddBaby';
import { Baby } from '@/types';

const RegisterBabyProfilePage = () => {
  const navigate = useNavigate();
  const [babyNum, setBabyNum] = useState(1);

  const [babies, setBabies] = useState<Baby[]>([]);
  const { mutate } = useAddBaby();

  const addBabyProfile = () => {
    console.log(babies);
  };

  const handleRegister = useCallback((baby: Baby | null, index: number) => {
    if (baby === null) {
      return;
    } // 아기 정보가 없으면 함수를 종료
    setBabies(prevBabies => {
      const newBabies = [...prevBabies];
      newBabies[index] = baby;
      return newBabies;
    });
  }, []);

  // useEffect(() => {
  //   babies.forEach((baby, index) => {
  //     if (baby) {
  //       handleRegister(baby, index);
  //     }
  //   });
  // }, [babies, handleRegister]);

  const regBaby = () => {
    const babiesComponents = [];
    for (let i = 0; i < babyNum; i++) {
      babiesComponents.push(
        <RegisterBabyProfile
          key={i}
          onRegister={(baby: Baby | null) => handleRegister(baby, i)}
          addBabyProfile={addBabyProfile}
        />
      );
    }
    return babiesComponents;
  };

  const handleBabyNum = () => setBabyNum(prevBabyNum => prevBabyNum + 1);

  const toMain = () => {
    babies.forEach(baby => {
      mutate(baby);
    });

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
