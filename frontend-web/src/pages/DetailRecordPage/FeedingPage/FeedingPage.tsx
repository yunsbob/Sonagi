import TimeRecorder from '@/components/molecules/TimeRecorder/TimeRecorder';
import MemoRecorder from '@/components/molecules/MemoRecorder/MemoRecorder';
import BreastFeedRecorder from '@/components/molecules/BreastFeedRecorder/BreastFeedRecorder';
import * as S from '@/pages/DetailRecordPage/FeedingPage/FeedingPage.style';
import Back from '@/components/atoms/Back/Back';
import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';
import { useGetRecordDetails } from '@/apis/Record/Queries/useGetRecordDetails';

interface NameProps {
  name: string;
  recordName: string;
  recordId: number;
}

const FeedingPage: React.FC<NameProps> = ({ name, recordName, recordId }) => {
  const recordDetailValue = useGetRecordDetails(recordName, recordId);
  console.log(recordDetailValue);
  // const details = useGetRecordDetails();
  return (
    <>
      <Back>{name + ' 상세페이지'}</Back>
      <S.FeedingPageContainer>
        <S.FeedingPageWrapper className="scrollable">
          <S.Divider>
            <BreastFeedRecorder></BreastFeedRecorder>
          </S.Divider>
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
        </S.FeedingPageWrapper>
      </S.FeedingPageContainer>
    </>
  );
};

export default FeedingPage;
