import { Text } from '@/components/atoms/Text/Text.styles';
import Button from '@/components/atoms/Button/Button';
import * as S from '@/components/molecules/TimeRecorder/TimeRecorder.style';
import { ButtonWrapper } from './TimeRecorder.style';
import theme from '@/styles/theme';

interface TimerProps {
  isStart?: boolean;
}

const Timer = ({ isStart = false }: TimerProps) => {
  return (
    <>
      <Text size={'headSmall'}>{isStart ? '시작' : '종료'} 시간</Text>
      <S.TimerButtonWrapper>
        <Button size="large" $backgroundColor={theme.color.lightgrey}>
          <ButtonWrapper>
            <Text size="headMedium">03</Text>
            <Text size="medium1">시</Text>
          </ButtonWrapper>
        </Button>
        <Button size="large" $backgroundColor={theme.color.lightgrey}>
          <ButtonWrapper>
            <Text size="headMedium">55</Text>
            <Text size="medium1">분</Text>
          </ButtonWrapper>
        </Button>
        <Button size="large">
          <Text size="headMedium">PM</Text>
        </Button>
      </S.TimerButtonWrapper>
    </>
  );
};

export default Timer;
