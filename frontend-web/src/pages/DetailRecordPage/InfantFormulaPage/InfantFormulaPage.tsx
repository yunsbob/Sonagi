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
import { useCallback, useState } from 'react';
import { useUpdateRecord } from '@/apis/Record/Mutations/useUpdateRecord';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

interface NameProps {
  name: string;
  recordName: string;
  recordId: number;
}

const InfantFormulaPage = ({ name, recordName, recordId }: NameProps) => {
  const recordDetails = useGetRecordDetails(recordName, recordId);
  const selectedDate = useRecoilValue(selectedDateState); // YYYY-DD-MM

  const [createdTime, setCreatedTime] = useState(recordDetails.createdTime);
  const [memo, setMemo] = useState(recordDetails.memo);
  const [amount, setAmount] = useState(recordDetails.amount);

  const updateRecordMutation = useUpdateRecord();
  const navigate = useNavigate();
  const RouteHandler = useCallback(() => navigate(-1), [navigate]);

  type Record = {
    [key: string]: number | string;
  };

  const createRecord = (
    recordName: string,
    recordId: number,
    createdTime: string,
    memo: string
  ): Record => {
    const idFieldMap: { [key: string]: string } = {
      infantFormulas: 'mealId',
      breastFeedings: 'mealId',
      babyFoods: 'mealId',
      milks: 'mealId',
    };

    const idField: string = idFieldMap[recordName] || 'pumpingBreastId';

    return {
      [idField]: recordId,
      amount,
      createdTime,
      memo,
    };
  };

  const queryClient = useQueryClient();
  const handleUpdate = async () => {
    const currentRecord: Record = createRecord(
      recordName,
      recordId,
      createdTime,
      memo
    );
    await updateRecordMutation.mutateAsync(
      {
        record: currentRecord,
        queryName: recordName,
      },
      {
        onSuccess() {
          queryClient.invalidateQueries(['recordDetails', recordId]);
        },
      }
    );
    RouteHandler();
  };

  return (
    <>
      <Back>{name + ' 상세페이지'}</Back>
      <S.InfantFormulaPageContainer>
        <S.InfantFormulaPageWrapper>
          <S.Divider>
            <TimeRecorder
              initialTime={createdTime}
              selectedDate={selectedDate}
              setCreatedTime={setCreatedTime}
            ></TimeRecorder>
          </S.Divider>
          <S.Divider>
            <AmountRecorder
              unitType="용량"
              unit="mL"
              unitArray={[-20, -10, -5, +5, +10, +20]}
              defaultValue={amount}
              minValue={0}
              maxValue={50}
              setAmount={setAmount}
            ></AmountRecorder>
          </S.Divider>
          <S.Divider>
            <MemoRecorder setMemo={setMemo} placeholder={memo}></MemoRecorder>
          </S.Divider>{' '}
          <Button option="activated" size="large" onClick={handleUpdate}>
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
