import TimeRecorder from '@/components/molecules/TimeRecorder/TimeRecorder';
import MemoRecorder from '@/components/molecules/MemoRecorder/MemoRecorder';
import BreastFeedRecorder from '@/components/molecules/BreastFeedRecorder/BreastFeedRecorder';
import * as S from '@/pages/DetailRecordPage/FeedingPage/FeedingPage.style';
import Back from '@/components/atoms/Back/Back';

interface NameProps {
  name: string;
}

const FeedingPage: React.FC<NameProps> = ({ name }) => {
  return (
    <>
      <Back>{name}</Back>
      <S.FeedingPageContainer>
        <S.FeedingPageWrapper>
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
        </S.FeedingPageWrapper>
      </S.FeedingPageContainer>
    </>
  );
};

export default FeedingPage;
