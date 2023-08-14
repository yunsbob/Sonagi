import TimeRecorder from '@/components/molecules/TimeRecorder/TimeRecorder';
import MemoRecorder from '@/components/molecules/MemoRecorder/MemoRecorder';
import * as S from '@/pages/DetailRecordPage/DiaperPage/DiaperPage.style';
import Back from '@/components/atoms/Back/Back';
import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';

interface NameProps {
  name: string;
  recordName: string;
  recordId: number;
}

const DiaperPage: React.FC<NameProps> = ({ name, recordName, recordId }) => {
  return (
    <>
      <Back>{name + ' 상세페이지'}</Back>
      <S.DiaperPageContainer>
        <S.DiaperPageWrapper>
          <S.Divider>
            <TimeRecorder></TimeRecorder>
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
        </S.DiaperPageWrapper>
      </S.DiaperPageContainer>
    </>
  );
};

export default DiaperPage;
