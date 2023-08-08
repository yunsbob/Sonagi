import TimeRecorder from '@/components/molecules/TimeRecorder/TimeRecorder';
import MemoRecorder from '@/components/molecules/MemoRecorder/MemoRecorder';
import * as S from '@/pages/DetailRecordPage/DiaperPage/DiaperPage.style';
import Back from '@/components/atoms/Back/Back';

interface NameProps {
  name: string;
}

const DiaperPage: React.FC<NameProps> = ({ name }) => {
  return (
    <>
      <Back>{name}</Back>
      <S.DiaperPageContainer>
        <S.DiaperPageWrapper>
          <S.Divider>
            <TimeRecorder></TimeRecorder>
          </S.Divider>
          <S.Divider>
            <MemoRecorder></MemoRecorder>
          </S.Divider>
        </S.DiaperPageWrapper>
      </S.DiaperPageContainer>
    </>
  );
};

export default DiaperPage;
