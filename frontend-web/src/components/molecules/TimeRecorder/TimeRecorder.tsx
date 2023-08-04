import React, { useState } from 'react';
import { Text } from '@/components/atoms/Text/Text.styles';
import Button from '@/components/atoms/Button/Button';
import * as S from '@/components/molecules/TimeRecorder/TimeRecorder.style';
import { ButtonWrapper } from './TimeRecorder.style';
import theme from '@/styles/theme';
import { TimePicker } from 'react-time-picker-typescript';
import 'react-time-picker-typescript/dist/style.css';

interface TimerProps {
  isStart?: boolean;
}

const Timer = ({ isStart = true }: TimerProps) => {
  const [value, setValue] = useState('10:00 AM');

  const onChange = (timeValue: string | null) => {
    if (typeof timeValue === 'string') {
      setValue(timeValue);
    }
  };

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onClickTimerButton = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0 }}>
          <TimePicker
            onChange={onChange}
            value={value}
            isOpen={modalOpen}
            use12Hours
          />
        </div>
        <S.TimerButtonWrapper>
          <Button
            $borderRadius="8px"
            size="large"
            $backgroundColor={theme.color.lightgrey}
          >
            <ButtonWrapper>
              <Text size="headMedium">{value}</Text>
              <Text size="medium1">시</Text>
            </ButtonWrapper>
          </Button>
          <Button
            $borderRadius="8px"
            size="large"
            $backgroundColor={theme.color.lightgrey}
          >
            <ButtonWrapper>
              <Text size="headMedium">55</Text>
              <Text size="medium1">분</Text>
            </ButtonWrapper>
          </Button>
          <Button $borderRadius="8px" size="large">
            <Text size="headMedium">PM</Text>
          </Button>
        </S.TimerButtonWrapper>
      </div>
    </>
  );
};

export default Timer;
