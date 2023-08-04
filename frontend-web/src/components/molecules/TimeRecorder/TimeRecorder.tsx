import { Text } from '@/components/atoms/Text/Text.styles';
import Button from '@/components/atoms/Button/Button';
import * as S from '@/components/molecules/TimeRecorder/TimeRecorder.style';
import { ButtonWrapper } from './TimeRecorder.style';
import theme from '@/styles/theme';

interface TimerProps {
  isStart?: boolean;
}

const Timer = ({ isStart = true }: TimerProps) => {
  return (
    <>
      <S.TimerTextWrapper>
        <Text size={'headSmall'}>{isStart ? '시작' : '종료'} 시간</Text>
      </S.TimerTextWrapper>
      <S.TimerButtonWrapper>
        <Button
          $borderRadius="8px"
          size="large"
          $backgroundColor={theme.color.lightgrey}
        >
          <ButtonWrapper>
            <Text size="headMedium">03</Text>
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
    </>
  );
};

export default Timer;
