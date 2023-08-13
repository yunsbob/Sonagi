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

const OurBabyPage = () => {
  return (
    <Background $background={BackgroundImg}>
      <S.InfoEditWrapper>
        <Button option="default" size="xSmall" onClick={() => {}}>
          <Image src={setting} width={1} />
          <Text size="small">정보 수정</Text>
        </Button>
      </S.InfoEditWrapper>
      <S.OurBabyPageContainer>
        <S.BabyNameWrapper>
          <Text size="headMedium" $fontWeight={700}>
            이지은 천사
          </Text>
        </S.BabyNameWrapper>
        <Image
          // src={true ? babyBlue : babyYellow}
          src={babyBlue}
          // style={{ transform: 'rotate(9.093deg)' }}
          width={144}
          $unit="px"
        />
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
            <S.UpperButtonWrapper>
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
