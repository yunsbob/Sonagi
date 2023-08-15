import BabyMedicalCheckStatusList from '@/components/organisms/BabyMedicalStatusList/BabyMedicalCheckStatusList/BabyMedicalCheckStatusList';
import { Container } from '../MyPagePage/MyPagePage.styles';
import BabyVaccinationStatusList from '@/components/organisms/BabyMedicalStatusList/BabyVaccinationStatusList/BabyVaccinationStatusList';

const MedicalInfoPage = () => {
  return (
    <Container>
      <BabyMedicalCheckStatusList />
      <BabyVaccinationStatusList />
    </Container>
  );
};

export default MedicalInfoPage;
