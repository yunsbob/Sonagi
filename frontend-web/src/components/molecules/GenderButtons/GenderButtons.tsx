import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { GenderButtonsContainer } from '@/components/molecules/GenderButtons/GenderButtons.style';
import { useState } from 'react';
import blueBabyCircle from '@/assets/images/img-baby-blue-circle.png';
import yellowBabyCircle from '@/assets/images/img-baby-yellow-circle.png';

const GenderButtons = () => {
  const [genderState, setGenderState] = useState('여');

  const handleMaleState = () => {
    setGenderState('남');
  };
  const handleFemaleState = () => {
    setGenderState('여');
  };

  return (
    <>
      <GenderButtonsContainer>
        <Image
          width={7.5}
          style={{ transform: 'rotate(11.758deg)' }}
          src={genderState === '남' ? blueBabyCircle : yellowBabyCircle}
        />
        <Button
          option="primary"
          // size
          onClick={handleMaleState}
          style={{
            border:
              genderState === '남'
                ? '2px solid var(--skyblue, #8CC8FF)'
                : '1px solid var(--grey-3, #D7D7D7)',
            color: genderState === '남' ? 'var(--blue, #0094FF)' : 'initial',
            width: '4.5rem',
          }}
        >
          남자
        </Button>
        <Button
          option="primary"
          // size="gender"
          onClick={handleFemaleState}
          style={{
            border:
              genderState === '여'
                ? '2px solid var(--skyblue, #8CC8FF)'
                : '1px solid var(--grey-3, #D7D7D7)',
            color: genderState === '여' ? 'var(--blue, #0094FF)' : 'initial',
            width: '4.5rem',
          }}
        >
          여자
        </Button>
      </GenderButtonsContainer>
    </>
  );
};

export default GenderButtons;
