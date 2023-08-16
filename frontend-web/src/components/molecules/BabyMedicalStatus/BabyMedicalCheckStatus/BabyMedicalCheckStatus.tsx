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
        <Image src={imageSrc} width={1.4} height={1.4} />
      </MedicalCheckImage>
      <MedicalCheckItem>
        <Text size="headSmall" style={{ marginBottom: '7px' }}>
          {medicalCheckData.checkupName}
        </Text>
        {medicalCheckData.checkupDate && (
          <Text size="medium3" color={theme.color.blue}>
            검진일: {medicalCheckData.checkupDate}
          </Text>
        )}
        {!medicalCheckData.checkupDate && today >= startDate && (
          <Text size="medium3" color={theme.color.danger}>
            권장일: {medicalCheckData.startDate} ~ {medicalCheckData.endDate}
          </Text>
        )}
        {!medicalCheckData.checkupDate && today < startDate && (
          <Text size="medium3" color={theme.color.gray1}>
            권장일: {medicalCheckData.startDate} ~ {medicalCheckData.endDate}
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
