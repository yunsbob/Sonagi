import TimeRecorder from '@/components/molecules/TimeRecorder/TimeRecorder';
import AmountRecorder from '@/components/molecules/AmountRecorder/AmountRecorder';
import MemoRecorder from '@/components/molecules/MemoRecorder/MemoRecorder';
import BreastFeedRecorder from '@/components/molecules/BreastFeedRecorder/BreastFeedRecorder';
import * as S from '@/pages/DetailRecordPage/DetailRecordPage.style';
import Back from '@/components/atoms/Back/Back';
import { Background } from '@/components/atoms/Background/Background.styles';
import orangeBackground from '@/assets/images/background-orange-to-blue.png';

const detailName = '수유 기록 상세';

const DetailRecordPage = () => {
  return (
    <>
      <Back>{detailName}</Back>
      <S.DetailRecordPageContainer>
        <S.DetailRecordPageWrapper>
          <S.Divider>
            <BreastFeedRecorder></BreastFeedRecorder>
          </S.Divider>
          <S.Divider>
            <TimeRecorder></TimeRecorder>
          </S.Divider>
          <S.Divider>
            <TimeRecorder isStart={false}></TimeRecorder>
          </S.Divider>
          <S.Divider>
            <AmountRecorder
              unitType="용량"
              unit="mL"
              unitArray={[-20, -10, -5, +5, +10, +20]}
              defaultValue={15}
              minValue={0}
              maxValue={50}
            ></AmountRecorder>
          </S.Divider>
          <S.Divider>
            <MemoRecorder></MemoRecorder>
          </S.Divider>
        </S.DetailRecordPageWrapper>
      </S.DetailRecordPageContainer>
    </>
  );
};

export default DetailRecordPage;
