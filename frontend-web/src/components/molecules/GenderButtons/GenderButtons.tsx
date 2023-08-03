import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { GenderButtonsContainer } from '@/components/molecules/GenderButtons/GenderButtons.style';
import { useState } from 'react';
import blueBabyCircle from '@/assets/images/img-baby-blue-circle.png';
import yellowBabyCircle from '@/assets/images/img-baby-yellow-circle.png';

const GenderButtons = () => {
  const [genderState, setGenderState] = useState<'male' | 'female'>('male');

  const handleMaleState = () => {
    setGenderState('male');
  };

  const handleFemaleState = () => {
    setGenderState('female');
  };

  return (
    <>
      <GenderButtonsContainer>
        {/* TODO 이미지 크기 서로 다른거 고치기 */}
        <Image
          width={5}
          src={genderState === 'male' ? blueBabyCircle : yellowBabyCircle}
        />
        <Button
          option={genderState === 'male' ? 'primary' : 'default'}
          size="medium"
          onClick={handleMaleState}
        >
          남자
        </Button>
        <Button
          option={genderState === 'female' ? 'primary' : 'default'}
          size="medium"
          onClick={handleFemaleState}
        >
          여자
        </Button>
      </GenderButtonsContainer>
    </>
  );
};

export default GenderButtons;
