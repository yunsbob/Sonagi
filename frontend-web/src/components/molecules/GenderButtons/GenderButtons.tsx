import Button from '@/components/atoms/Button/Button';
import { GenderButtonsContainer } from '@/components/molecules/GenderButtons/GenderButtons.style';
import { useState } from 'react';

const GenderButtons = () => {
  const [genderState, setGenderState] = useState('남');

  const handleMaleState = () => {
    setGenderState('남');
  };
  const handleFemaleState = () => {
    setGenderState('여');
  };

  return (
    <>
      <GenderButtonsContainer>
        <Button
          // variant=''
          // size
          onClick={handleMaleState}
          style={
            genderState === '남'
              ? {
                  border: '2px solid var(--skyblue, #8CC8FF)',
                  color: 'var(--blue, #0094FF)',
                }
              : { border: '1px solid var(--grey-3, #D7D7D7)' }
          }
        >
          남자
        </Button>
        <Button
          // variant="gender"
          // size="gender"
          onClick={handleFemaleState}
          style={
            genderState === '남'
              ? { border: '1px solid var(--grey-3, #D7D7D7)' }
              : {
                  border: '2px solid var(--skyblue, #8CC8FF)',
                  color: 'var(--blue, #0094FF)',
                }
          }
        >
          여자
        </Button>
      </GenderButtonsContainer>
    </>
  );
};

export default GenderButtons;
