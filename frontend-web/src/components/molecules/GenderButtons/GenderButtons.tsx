import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { GenderButtonsContainer } from '@/components/molecules/GenderButtons/GenderButtons.style';
import blueBabyCircle from '@/assets/images/img-baby-blue-circle.png';
import yellowBabyCircle from '@/assets/images/img-baby-yellow-circle.png';

interface Props {
  gender: 'male' | 'female';
  setGender: (gender: 'male' | 'female') => void;
}

const GenderButtons: React.FC<Props> = ({ gender, setGender }) => {
  const handleMaleState = () => {
    setGender('male');
  };

  const handleFemaleState = () => {
    setGender('female');
  };

  return (
    <>
      <GenderButtonsContainer>
        {/* TODO 이미지 크기 서로 다른거 고치기 */}
        <Image
          width={5}
          src={gender === 'male' ? blueBabyCircle : yellowBabyCircle}
        />
        <Button
          option={gender === 'male' ? 'primary' : 'default'}
          size="medium"
          onClick={handleMaleState}
        >
          남자
        </Button>
        <Button
          option={gender === 'female' ? 'primary' : 'default'}
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
