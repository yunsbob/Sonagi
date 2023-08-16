import BabyMedicalCheckStatus from '@/components/molecules/BabyMedicalStatus/BabyMedicalCheckStatus/BabyMedicalCheckStatus';
import { MedicalCheck } from '@/types';

interface BabyMedicalCheckStatusProps {
  medicalCheckData: MedicalCheck[];
}

const BabyMedicalCheckStatusList = ({
  medicalCheckData,
}: BabyMedicalCheckStatusProps) => {
  return (
    <>
      {medicalCheckData.map((medicalCheck, index) => (
        <BabyMedicalCheckStatus key={index} medicalCheckData={medicalCheck} />
      ))}
    </>
  );
};

export default BabyMedicalCheckStatusList;
