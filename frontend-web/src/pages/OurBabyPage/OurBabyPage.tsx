import { Text } from '@/components/atoms/Text/Text.styles';
import { OurBabyPageContainer } from '@/pages/OurBabyPage/OurBabyPage.styles';
import Button from '@/components/atoms/Button/Button';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

const OurBabyPage = () => {
  const navigate = useNavigate();
  const toVaccination = () => {
    return navigate(PATH.VACCINATION);
  };

  return (
    <OurBabyPageContainer>
      <Text size="medium1">ourBaby</Text>
      <Button option="primary">
        <Text size="medium1" onClick={toVaccination}>
          예방 접종
        </Text>
      </Button>
    </OurBabyPageContainer>
  );
};

export default OurBabyPage;
