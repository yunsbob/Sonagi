import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';

interface TimerProps {
  isStart?: boolean;
}

const Timer = ({ isStart }: TimerProps) => {
  return (
    <>
      <Text size={'headSmall'}>{isStart ? '시작' : '종료'} 시간</Text>
      <div>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </div>
    </>
  );
};

export default Timer;
