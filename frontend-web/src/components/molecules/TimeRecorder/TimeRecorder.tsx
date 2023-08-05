import React, { useState } from 'react';
import { Text } from '@/components/atoms/Text/Text.styles';
import Button from '@/components/atoms/Button/Button';
import * as S from '@/components/molecules/TimeRecorder/TimeRecorder.style';
import theme from '@/styles/theme';

import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

interface TimerProps {
  isStart?: boolean;
  isLeft?: boolean;
}

const Timer = ({ isStart = true, isLeft = false }: TimerProps) => {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2022-04-17T17:30')
  );

  return (
    <>
      <S.TimerTextWrapper>
        <Text size="headSmall">{isStart ? '시작 시간' : '종료 시간'}</Text>
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
        >
          <S.ButtonWrapper>
            <Text size="headMedium">{value?.format('hh')}</Text>
            <Text size="medium1">시</Text>
          </S.ButtonWrapper>
        </Button>
        <Button
          $borderRadius="8px"
          size="large"
          $backgroundColor={theme.color.lightgrey}
        >
          <S.ButtonWrapper>
            <Text size="headMedium">{value?.format('mm')}</Text>
            <Text size="medium1">분</Text>
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
