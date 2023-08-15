import TimeRecorder from '@/components/molecules/TimeRecorder/TimeRecorder';
import AmountRecorder from '@/components/molecules/AmountRecorder/AmountRecorder';
import MemoRecorder from '@/components/molecules/MemoRecorder/MemoRecorder';
import BreastFeedRecorder from '@/components/molecules/BreastFeedRecorder/BreastFeedRecorder';
import * as S from '@/pages/DetailRecordPage/InfantFormulaPage/InfantFormulaPage.style';
import Back from '@/components/atoms/Back/Back';
import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';
import { useGetRecordDetails } from '@/apis/Record/Queries/useGetRecordDetails';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '@/states/userState';
import { selectedBabyState } from '@/states/babyState';
import { selectedDateState } from '@/states/dateState';
import { useState } from 'react';

interface NameProps {
  name: string;
  recordName: string;
  recordId: number;
}

const InfantFormulaPage: React.FC<NameProps> = ({
  name,
  recordName,
  recordId,
}) => {
  const recordDetails = useGetRecordDetails(recordName, recordId);
  const userInfo = useRecoilValue(userInfoState);
  const babyInfo = useRecoilValue(selectedBabyState);
  const selectedDate = useRecoilValue(selectedDateState); // YYYY-DD-MM
  const [memo, setMemo] = useState('');

  const [createdTime, setCreatedTime] = useState(recordDetails.createdTime);
  const [amount, setAmount] = useState(0);

  return (
    <>
      <Back>{name + ' 상세페이지'}</Back>
      <S.InfantFormulaPageContainer>
        <S.InfantFormulaPageWrapper>
          <S.Divider>{/* <TimeRecorder></TimeRecorder> */}</S.Divider>
          <S.Divider>
            <AmountRecorder
              unitType="용량"
              unit="mL"
              unitArray={[-20, -10, -5, +5, +10, +20]}
              defaultValue={15}
              minValue={0}
              maxValue={50}
              setAmount={setAmount}
            ></AmountRecorder>
          </S.Divider>
          <S.Divider>
            <MemoRecorder setMemo={setMemo} placeholder={memo}></MemoRecorder>
          </S.Divider>{' '}
          <Button
            option="activated"
            size="large"
            // onClick={onClickButton}
          >
            <Text size="headSmall" color={theme.color.white1}>
              등록하기
            </Text>
          </Button>
        </S.InfantFormulaPageWrapper>
      </S.InfantFormulaPageContainer>
    </>
  );
};

export default InfantFormulaPage;
