import { useState } from 'react';
import { Text } from '@/components/atoms/Text/Text.styles';
import Button from '@/components/atoms/Button/Button';
import * as S from '@/components/molecules/TimeRecorder/TimeRecorder.style';
import theme from '@/styles/theme';

import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { selectedDateState } from '@/states/dateState';
import { useRecoilValue } from 'recoil';

interface TimerProps {
  name?: string;
  initialTime?: string;
}

const Timer = ({ name = '기록 시간', initialTime }: TimerProps) => {
  const selectedDate = useRecoilValue(selectedDateState); // YYYY-DD-MM
  const timeValue = `${selectedDate}T${initialTime?.substring(0, 5)}`;

  const [value, setValue] = useState<Dayjs | null>(
    timeValue ? dayjs(timeValue) : dayjs('2022-04-17T17:30')
  );

  return (
    <>
      <S.TimerTextWrapper>
        <Text size="headSmall">{name}</Text>
      </S.TimerTextWrapper>
      <S.TimerButtonWrapper>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileTimePicker
            defaultValue={value}
            onChange={data => setValue(data)}
            sx={{
              width: '100%',
              opacity: 0,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </LocalizationProvider>
        <Button
          $borderRadius="8px"
          size="large"
          $backgroundColor={theme.color.lightgrey}
          $border={'0'}
        >
          <S.ButtonWrapper>
            <Text size="headLarge">{value?.format('hh')}</Text>
            <Text size="medium1" style={{ paddingTop: '6px' }}>
              시
            </Text>
          </S.ButtonWrapper>
        </Button>
        <Button
          $borderRadius="8px"
          size="large"
          $backgroundColor={theme.color.lightgrey}
          $border={'0'}
        >
          <S.ButtonWrapper>
            <Text size="headLarge">{value?.format('mm')}</Text>
            <Text size="medium1" style={{ paddingTop: '6px' }}>
              분
            </Text>
          </S.ButtonWrapper>
        </Button>
        <Button $borderRadius="8px" size="large">
          <Text size="headMedium">{value?.format('A')}</Text>
        </Button>
      </S.TimerButtonWrapper>
    </>
  );
};

export default Timer;
