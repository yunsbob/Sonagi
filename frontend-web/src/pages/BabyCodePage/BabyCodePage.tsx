import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { Text } from '@/components/atoms/Text/Text.styles';
import * as S from '@/pages/BabyCodePage/BabyCodePage.styles';
import Back from '@/components/atoms/Back/Back';
import RegisterField from '@/components/molecules/RegisterField/RegisterField';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import theme from '@/styles/theme';
import { useState } from 'react';
import CheckBabyModal from '@/components/organisms/CheckBabyModal/CheckBabyModal';
import { useRegisterBabyCode } from '@/apis/Baby/Mutations/useRegistBabyCode';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '@/states/userState';
import { Toast } from '@/components/organisms/Toast/Toast';

//TODO: CheckBabyModal 연결!!
const BabyCodePage = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const placeholder = '코드를 입력하세요';
  const alertMessage = '10자 이내로 입력해주세요';

  const useRegisterBabyCodeMutation = useRegisterBabyCode();
  const userInfo = useRecoilValue(userInfoState);

  const [showToast, setShowToast] = useState(false);

  const onClickButtonAction = (code: string) => {
    //TODO: 코드 입력으로 애기 등록 api 호출
    console.log(userInfo.userId, code);
    useRegisterBabyCodeMutation.mutate(
      { userId: userInfo.userId, code: code },
      {
        onError: error => {
          console.log(error);
          setShowToast(true);
        },
      }
    );

    // navigate(PATH.MAIN);
    setModalOpen(true);
  };
  const onModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Background $background={orangeBackground}>
      <Back />
      {showToast && <Toast message="발급된 아이코드가 올바르지 않습니다" />}
      <S.BabyCodePageContainer>
        <S.BabyCodePageWrapper>
          <Text color={'black3'}>
            공동 양육자에게 발급된
            <br />
            코드를 입력해주세요.
          </Text>
          <RegisterField
            onClickButtonAction={onClickButtonAction}
            option="default"
            size="medium"
            placeholder={placeholder}
            alertMessage={alertMessage}
            activeButtonColor={theme.gradient.skyblueBtn}
          />
        </S.BabyCodePageWrapper>
      </S.BabyCodePageContainer>
    </Background>
  );
};

export default BabyCodePage;
