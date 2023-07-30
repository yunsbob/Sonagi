import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { BabyBarContainer } from '@/components/molecules/BabyBar/BabyBar.styles';
import babyCircleBlue from '@/assets/images/img-baby-blue-circle.png';

const BabyBar = () => {
  const BabyArray = ['이지은', '이지금'];

  return (
    <BabyBarContainer>
      {BabyArray.map((item, index) => (
        <Button
          variant="record"
          size="xSmall"
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            // padding: '4px',
          }}
        >
          <Image
            src={babyCircleBlue}
            width={1.2}
            style={{ transform: 'rotate(-10.68deg)', margin: '2px' }}
          />
          {item}
        </Button>
      ))}
    </BabyBarContainer>
  );
};

export default BabyBar;
