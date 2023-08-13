import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';
import { Text } from '@/components/atoms/Text/Text.styles';
import * as S from '@/pages/UpdateBabyProfilePage/UpdateBabyProfilePage.styles';
import Back from '@/components/atoms/Back/Back';
import UpdateBabyProfile from '@/components/organisms/UpdateBabyProfile/UpdateBabyProfile';

// TODO: 아이 삭제 버튼 만들기 모달이랑

const UpdateBabyProfilePage = () => {
  return (
    <Background $background={orangeBackground}>
      <Back />
      <S.UpdateBabyProfilePageContainer>
        <S.UpdateBabyProfilePageWrapper>
          <Text>
            우리 아이의 출생일과
            <br /> 성별, 이름을 수정해주세요
          </Text>
          <UpdateBabyProfile />
          <S.AddBabyWrapper />
          <S.DataDeleteWrapper>
            <Text size="medium1">데이터 삭제하기</Text>
          </S.DataDeleteWrapper>
        </S.UpdateBabyProfilePageWrapper>
      </S.UpdateBabyProfilePageContainer>
    </Background>
  );
};

export default UpdateBabyProfilePage;
