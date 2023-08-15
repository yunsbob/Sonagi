import { Text } from '@/components/atoms/Text/Text.styles';
import check from '@/assets/images/img-check-blue.png';

const BabyMedicalCheckStatus = () => {
  return (
    <>
      <Image src={check} />
      <Text size="medium2">신체검사</Text>
      <Text size="small">접종일</Text>
    </>
  );
};

export default BabyMedicalCheckStatus;
