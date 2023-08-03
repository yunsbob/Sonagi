import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { BabyBarContainer } from '@/components/molecules/BabyBar/BabyBar.styles';
import babyCircleBlue from '@/assets/images/img-baby-blue-circle.png';

const BabyBar = () => {
  const BabyArray = ['이지은', '이지금'];

  return (
    <BabyBarContainer>
      {BabyArray.map((item, index) => (
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
          {item}
        </Button>
      ))}
    </BabyBarContainer>
  );
};

export default BabyBar;
