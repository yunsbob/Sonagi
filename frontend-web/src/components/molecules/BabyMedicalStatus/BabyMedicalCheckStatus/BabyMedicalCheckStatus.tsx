import { Text } from '@/components/atoms/Text/Text.styles';
import checkBlue from '@/assets/images/img-check-blue.png';
import checkGrey from '@/assets/images/img-check-grey.png';
import arrow from '@/assets/images/icon-arrow-mini-right-grey.png';
import { Image } from '@/components/atoms/Image/Image';
import {
  MedicalCheckBlock,
  MedicalCheckItem,
  MedicalCheckImage,
} from './BabyMedicalCheckStatus.styles';
import { MedicalCheck } from '@/types';
import theme from '@/styles/theme';

interface BabyMedicalCheckStatusProps {
  medicalCheckData: MedicalCheck;
}

const BabyMedicalCheckStatus = ({
  medicalCheckData,
}: BabyMedicalCheckStatusProps) => {
  const imageSrc =
    medicalCheckData.checkupDate === null ? checkGrey : checkBlue;

  const today = new Date();
  const startDate = new Date(medicalCheckData.startDate);

  return (
    <MedicalCheckBlock>
      <MedicalCheckImage>
        <Image src={imageSrc} width={1} height={1} />
      </MedicalCheckImage>
      <MedicalCheckItem>
        <Text size="medium2">{medicalCheckData.checkupName}</Text>
        {medicalCheckData.checkupDate && (
          <Text size="small" color={theme.color.blue}>
            {medicalCheckData.checkupDate}
          </Text>
        )}
        {!medicalCheckData.checkupDate && today >= startDate && (
          <Text size="small" color={theme.color.danger}>
            {medicalCheckData.startDate} ~ {medicalCheckData.endDate}
          </Text>
        )}
        {!medicalCheckData.checkupDate && today < startDate && (
          <Text size="small" color={theme.color.gray3}>
            {medicalCheckData.startDate} ~ {medicalCheckData.endDate}
          </Text>
        )}
      </MedicalCheckItem>
      <MedicalCheckImage>
        <Image src={arrow} width={1.3} height={1.3} />
      </MedicalCheckImage>
    </MedicalCheckBlock>
  );
};

export default BabyMedicalCheckStatus;
