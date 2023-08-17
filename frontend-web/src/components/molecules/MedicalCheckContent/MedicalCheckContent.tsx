import { MedicalCheck } from '@/types';
import {
  MedicalCheckCalendarButton,
  MedicalCheckContentWrapper,
} from './MedicalCheckContent.styles';
import { Text } from '@/components/atoms/Text/Text.styles';
import Button from '@/components/atoms/Button/Button';
import theme from '@/styles/theme';
import calendarImg from '@/assets/images/icon-calendar-blue.png';
import check from '@/assets/images/img-check-blue.png';
import { Image } from '@/components/atoms/Image/Image';

interface BabyMedicalCheckProps {
  medicalCheckData: MedicalCheck;
}

const MedicalCheckContent = ({ medicalCheckData }: BabyMedicalCheckProps) => {
  const today = new Date();
  const startDate = new Date(medicalCheckData.startDate);

  return (
    <>
      <MedicalCheckContentWrapper>
        <Text
          size="headMedium"
          $fontWeight={900}
          style={{ marginBottom: '7px' }}
        >
          {medicalCheckData.checkupName}
        </Text>
        {medicalCheckData.checkupDate && (
          <MedicalCheckCalendarButton>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Text
                size="medium3"
                style={{ marginBottom: '15px', marginRight: '7px' }}
                color={theme.color.medicalblue}
              >
                검진이 완료되었어요
              </Text>
              <Image src={check} height={1.5} width={1.5}></Image>
            </div>
            <Button
              size="xSmall"
              $backgroundColor={theme.color.gray4}
              $border="none"
              style={{ height: '24px', marginTop: '1px' }}
            >
              <Text
                size="small"
                $fontWeight={400}
                color={theme.color.medicalblue}
              >
                {medicalCheckData.checkupDate}
              </Text>
              &nbsp;
              <Image src={calendarImg} height={1}></Image>
            </Button>
          </MedicalCheckCalendarButton>
        )}
        {!medicalCheckData.checkupDate && (
          <MedicalCheckCalendarButton>
            {today >= startDate && (
              <Text
                size="medium3"
                style={{ marginBottom: '15px' }}
                color={theme.color.danger}
              >
                권장일: {medicalCheckData.startDate} ~{' '}
                {medicalCheckData.endDate}
              </Text>
            )}
            {today < startDate && (
              <Text size="medium3" style={{ marginBottom: '15px' }}>
                권장일: {medicalCheckData.startDate} ~{' '}
                {medicalCheckData.endDate}
              </Text>
            )}
            <Button
              size="xSmall"
              $backgroundColor={theme.color.gray4}
              $border="none"
              style={{ height: '24px', marginTop: '1px' }}
            >
              <Text
                size="small"
                $fontWeight={400}
                color={theme.color.medicalblue}
              >
                접종일 등록 &nbsp;
              </Text>
              <Image src={calendarImg} height={1}></Image>
            </Button>
          </MedicalCheckCalendarButton>
        )}
      </MedicalCheckContentWrapper>
      <MedicalCheckContentWrapper>
        <Text size="medium2" style={{ marginBottom: '15px' }}>
          {medicalCheckData.content}
        </Text>
      </MedicalCheckContentWrapper>
    </>
  );
};

export default MedicalCheckContent;
