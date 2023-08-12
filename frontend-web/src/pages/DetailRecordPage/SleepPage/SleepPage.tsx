import TimeRecorder from '@/components/molecules/TimeRecorder/TimeRecorder';
import AmountRecorder from '@/components/molecules/AmountRecorder/AmountRecorder';
import MemoRecorder from '@/components/molecules/MemoRecorder/MemoRecorder';
import BreastFeedRecorder from '@/components/molecules/BreastFeedRecorder/BreastFeedRecorder';
import * as S from '@/pages/DetailRecordPage/SleepPage/SleepPage.style';
import Back from '@/components/atoms/Back/Back';
import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';

interface NameProps {
  name: string;
}

const SleepPage: React.FC<NameProps> = ({ name }) => {
  return (
    <>
      <Back>{name + ' 상세페이지'}</Back>
      <S.SleepPageContainer>
        <S.SleepPageWrapper>
          <S.Divider>
            <TimeRecorder name="시작 시간"></TimeRecorder>
          </S.Divider>
          <S.Divider>
            <TimeRecorder name="종료 시간"></TimeRecorder>
          </S.Divider>
          <S.Divider>
            <MemoRecorder></MemoRecorder>
          </S.Divider>
          <Button
            option="activated"
            size="large"
            // onClick={onClickButton}
          >
            <Text size="headSmall" color={theme.color.white1}>
              등록하기
            </Text>
          </Button>
        </S.SleepPageWrapper>
      </S.SleepPageContainer>
    </>
  );
};

export default SleepPage;
