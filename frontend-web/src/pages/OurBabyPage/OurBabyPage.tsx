import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import LoadingPage from '@/pages/LoadingPage/LoadingPage';
import { OurBabyPageContainer } from '@/pages/OurBabyPage/OurBabyPage.styles';
import setting from '@/assets/images/icon-setting-grey.png';
import { useRecoilValue } from 'recoil';
import babyBlue from '@/assets/images/img-baby-blue.png';
import babyYellow from '@/assets/images/img-baby-yellow.png';
import babyVaccine from '@/assets/images/img-vaccine.png';
import babyCard from '@/assets/images/img-baby-card.png';

const OurBabyPage = () => {
  return (
    // <LoadingPage />
    <OurBabyPageContainer>
      <Text size="medium1">ourBaby</Text>
      <Text size="headMedium" $fontWeight={700}>
        이지은
      </Text>
      <Button option="default" size="xSmall" onClick={() => {}}>
        <Image src={setting} width={1} />
        <Text size="small">정보 수정</Text>
      </Button>
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
      <Button>
        예방접종/검진<Image src={babyVaccine}></Image>
      </Button>
      <Button>
        초대 코드 공유<Image src={babyCard}></Image>
      </Button>
      <Text size="medium1">
        우리 아이는 이러한 <span style={{ fontWeight: 700 }}>질병/알러지</span>{' '}
        등이 있어요
      </Text>
      <Button>
        <Text size="medium3">지금이는 견과류 알러지가 있습니다.</Text>
        <Text size="small">웅야아빠</Text>
      </Button>
    </OurBabyPageContainer>
  );
};

export default OurBabyPage;
