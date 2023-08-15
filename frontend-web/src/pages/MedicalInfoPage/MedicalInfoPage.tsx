import { useRecoilValue } from 'recoil';
import BabyMedicalCheckStatusList from '@/components/organisms/BabyMedicalStatusList/BabyMedicalCheckStatusList/BabyMedicalCheckStatusList';
import { Container } from '../MyPagePage/MyPagePage.styles';
import BabyVaccinationStatusList from '@/components/organisms/BabyMedicalStatusList/BabyVaccinationStatusList/BabyVaccinationStatusList';
import { selectedBabyState } from '@/states/babyState';
import { Text } from '@/components/atoms/Text/Text.styles';
import { BabiesOfUser } from '@/types';
import { useGetVaccination } from '@/apis/Baby/Queries/useGetVaccination';
import { useGetMedicalCheck } from '@/apis/Baby/Queries/useGetMedicalCheck';

const MedicalInfoPage = () => {
  const babyInfo: BabiesOfUser = useRecoilValue(selectedBabyState);
  const vaccinationList = useGetVaccination(babyInfo.babyId);
  const medicalCheckList = useGetMedicalCheck(babyInfo.babyId);

  return (
    <Container>
      <BabyMedicalCheckStatusList medicalCheckData={medicalCheckList} />
    </Container>
  );
};

export default MedicalInfoPage;
