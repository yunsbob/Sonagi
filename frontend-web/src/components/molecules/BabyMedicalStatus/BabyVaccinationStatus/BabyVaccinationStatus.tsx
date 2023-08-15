import { Text } from '@/components/atoms/Text/Text.styles';
import checkBlue from '@/assets/images/img-check-blue.png';
import checkGrey from '@/assets/images/img-check-grey.png';
import arrow from '@/assets/images/icon-arrow-mini-right-grey.png';
import { Image } from '@/components/atoms/Image/Image';
import {
  VaccinationBlock,
  VaccinationImage,
  VaccinationItem,
} from './BabyVaccinationStatus.styles';
import { Vaccination } from '@/types';
import theme from '@/styles/theme';

interface BabyVaccinationStatusProps {
  vaccinationData: Vaccination;
}

const BabyVaccinationStatus = ({
  vaccinationData,
}: BabyVaccinationStatusProps) => {
  const imageSrc =
    vaccinationData.vaccinationDate === null ? checkGrey : checkBlue;

  const today = new Date();
  const startDate = new Date(vaccinationData.startDate);

  return (
    <VaccinationBlock>
      <VaccinationImage>
        <Image src={imageSrc} width={1} height={1} />
      </VaccinationImage>
      <VaccinationItem>
        <Text size="medium2">{vaccinationData.disease}</Text>
        <Text size="medium3">{vaccinationData.vaccineName}</Text>
        {vaccinationData.vaccinationDate && (
          <Text size="small" color={theme.color.blue}>
            {vaccinationData.vaccinationDate}
          </Text>
        )}
        {!vaccinationData.vaccinationDate && today >= startDate && (
          <Text size="small" color={theme.color.danger}>
            {vaccinationData.startDate} ~ {vaccinationData.endDate}
          </Text>
        )}
        {!vaccinationData.vaccinationDate && today < startDate && (
          <Text size="small" color={theme.color.gray3}>
            {vaccinationData.startDate} ~ {vaccinationData.endDate}
          </Text>
        )}
      </VaccinationItem>
      <VaccinationImage>
        <Image src={arrow} width={1.3} height={1.3} />
      </VaccinationImage>
    </VaccinationBlock>
  );
};

export default BabyVaccinationStatus;
