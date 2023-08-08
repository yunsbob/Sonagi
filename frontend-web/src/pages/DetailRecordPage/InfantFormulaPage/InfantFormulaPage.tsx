import TimeRecorder from '@/components/molecules/TimeRecorder/TimeRecorder';
import AmountRecorder from '@/components/molecules/AmountRecorder/AmountRecorder';
import MemoRecorder from '@/components/molecules/MemoRecorder/MemoRecorder';
import BreastFeedRecorder from '@/components/molecules/BreastFeedRecorder/BreastFeedRecorder';
import * as S from '@/pages/DetailRecordPage/InfantFormulaPage/InfantFormulaPage.style';
import Back from '@/components/atoms/Back/Back';

interface NameProps {
  name: string;
}

const InfantFormulaPage: React.FC<NameProps> = ({ name }) => {
  return (
    <>
      <Back>{name}</Back>
      <S.InfantFormulaPageContainer>
        <S.InfantFormulaPageWrapper>
          <S.Divider>
            <TimeRecorder></TimeRecorder>
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
        </S.InfantFormulaPageWrapper>
      </S.InfantFormulaPageContainer>
    </>
  );
};

export default InfantFormulaPage;
