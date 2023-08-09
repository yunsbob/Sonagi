import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { BabyBarContainer } from '@/components/molecules/BabyBar/BabyBar.styles';
import babyCircleBlue from '@/assets/images/img-baby-blue-circle.png';

import { useGetBaby } from '@/apis/Baby/Queries/useGetBaby';
import { useRecoilState } from 'recoil';
import { userInfoState } from '@/states/UserState';

const BabyBar = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { data } = useGetBaby(userInfo.userId);

  return (
    <BabyBarContainer>
      {data?.map((item, index) => (
        // 예외적으로 BabyBar의 padding값을 inline style으로 적용
        <Button
          option="default"
          size="xSmall"
          key={index}
          style={{ padding: '3px 9px 3px 4px' }}
        >
          <Image
            src={babyCircleBlue}
            width={1.2}
            style={{
              transform: 'rotate(-10.68deg)',
              margin: '2px',
            }}
          />
          {item.name}
        </Button>
      ))}
    </BabyBarContainer>
  );
};

export default BabyBar;
