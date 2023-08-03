import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { Text } from '@/components/atoms/Text/Text.styles';
import family from '@/assets/images/img-family.png';
import { Image } from '@/components/atoms/Image/Image';
import * as S from '@/pages/SignInPage/SignInPage.style';
import Back from '@/components/atoms/Back/Back';
import RegisterField from '@/components/molecules/RegisterField/RegisterField';
import { useEffect, useState } from 'react';
import theme from '@/styles/theme';
import RegisterBabyProfile from '@/components/organisms/RegisterBabyProfile/RegisterBabyProfile';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userInfoState } from '@/states/UserState';
import { produce } from 'immer';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
<<<<<<< HEAD
import Memo from '@/components/atoms/Memo/Memo';
=======
import jwt from 'jwt-decode';
>>>>>>> 0db85ac39c54a2f66077fdab1b61a6f324ef3e90

const SignInPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigate = useNavigate();

  const placeholder = '이름을 입력하세요';

  const alertMessage = '10자 이내로 입력해주세요';

  const onClickButtonAction = (value: string) => {
    setUserInfo(
      produce(draft => {
        draft['name'] = value;
      })
    );

    //TODO: 사용자 정보 저장 api 호출

    navigate(PATH.REGISTER);
  };

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
            onClickButtonAction={onClickButtonAction}
            option="default"
            size="medium"
            placeholder={placeholder}
            alertMessage={alertMessage}
            // $backgroundColor={
            //   disabled ? theme.color.gray2 : theme.gradient.orangeBtn
            // }
          />
          <Memo></Memo>
        </S.SignInPageWrapper>
      </S.SignInPageContainer>
    </Background>
  );
};

export default SignInPage;
