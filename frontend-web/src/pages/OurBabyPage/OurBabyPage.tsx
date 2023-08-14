import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import * as S from '@/pages/OurBabyPage/OurBabyPage.styles';
import setting from '@/assets/images/icon-setting-grey.png';
import babyBlue from '@/assets/images/img-baby-blue.png';
import babyYellow from '@/assets/images/img-baby-yellow.png';
import babyVaccine from '@/assets/images/img-vaccine.png';
import babyCard from '@/assets/images/img-baby-card.png';
import BabyPersonalInfoContainer from '@/components/organisms/BabyPersonalInfoContainer/BabyPersonalInfoContainer';
import { Background } from '@/components/atoms/Background/Background.styles';
import BackgroundImg from '@/assets/images/background.png';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { BabiesOfUser, Baby } from '@/types';
import { babyInfoState, selectedBabyState } from '@/states/babyState';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { BabyCodeModal } from '@/components/organisms/BabyCodeModal/BabyCodeModal';

const OurBabyPage = () => {
  const navigate = useNavigate();

  const babyInfo: BabiesOfUser = useRecoilValue(selectedBabyState);
  const [isMale, setIsMale] = useState(babyInfo.gender === 'M');

  const [BabyCodeModalOpen, setBabyCodeModalOpen] = useState(false);

  const modalClose = (
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setState(false);
  };

  // TODO: 함께한 시간 계산하기.. 근데 selectBaby에는 date가 없다
  return (
    <Background $background={BackgroundImg}>
      <BabyCodeModal
        onModalClose={() => modalClose(setBabyCodeModalOpen)}
        modalOpen={BabyCodeModalOpen}
      />
      <S.InfoEditWrapper>
        <Button
          option="default"
          size="xSmall"
          onClick={() => {
            navigate(PATH.UPDATEBABYPROFILE);
          }}
        >
          <Image src={setting} width={1} style={{ marginRight: '10px' }} />
          <Text size="small">정보 수정</Text>
        </Button>
      </S.InfoEditWrapper>
      <S.OurBabyPageContainer>
        <S.BabyNameWrapper>
          <Text size="headMedium" $fontWeight={700}>
            {babyInfo.name} 천사
          </Text>
        </S.BabyNameWrapper>
        <div style={{ height: '144px' }}>
          <Image src={isMale ? babyBlue : babyYellow} height={100} $unit="%" />
        </div>
        <Text size="medium1"> 함께한 시간 247일</Text>
        <Text size="headMedium" $fontWeight={700}>
          35주
        </Text>
        <S.UpperButtonContainer>
          <Button>
            <S.UpperButtonWrapper>
              <Text size="headSmall">예방접종/검진</Text>
              <Image src={babyVaccine} width={33} $unit="px" />
            </S.UpperButtonWrapper>
          </Button>
          <Button>
            <S.UpperButtonWrapper onClick={() => setBabyCodeModalOpen(true)}>
              <Text size="headSmall">초대 코드 공유</Text>
              <Image src={babyCard} width={33} $unit="px" />
            </S.UpperButtonWrapper>
          </Button>
        </S.UpperButtonContainer>
        <S.ButtonsDivider />
        <BabyPersonalInfoContainer isDisease={true}></BabyPersonalInfoContainer>
        <BabyPersonalInfoContainer
          isDisease={false}
        ></BabyPersonalInfoContainer>
      </S.OurBabyPageContainer>
    </Background>
  );
};

export default OurBabyPage;
