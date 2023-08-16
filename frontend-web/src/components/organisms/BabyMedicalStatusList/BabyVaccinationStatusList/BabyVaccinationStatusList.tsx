import BabyVaccinationStatus from '@/components/molecules/BabyMedicalStatus/BabyVaccinationStatus/BabyVaccinationStatus';
import { Vaccination } from '@/types';

interface BabyVaccinationStatusProps {
  vaccinationData: Vaccination[];
}

const BabyVaccinationStatusList = ({
  vaccinationData,
}: BabyVaccinationStatusProps) => {
  return (
    <>
      {vaccinationData.map((vaccination, index) => (
        <BabyVaccinationStatus key={index} vaccinationData={vaccination} />
      ))}
    </>
  );
};

export default BabyVaccinationStatusList;
