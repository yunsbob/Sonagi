import * as S from '@/pages/DetailRecordPage/DiaperPage/DiaperPage.style';
import Back from '@/components/atoms/Back/Back';
import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';
import { useGetRecordDetails } from '@/apis/Record/Queries/useGetRecordDetails';
import { useRecoilValue } from 'recoil';
import { useCallback, useState } from 'react';
import { selectedDateState } from '@/states/dateState';
import { useUpdateRecord } from '@/apis/Record/Mutations/useUpdateRecord';
import { useNavigate } from 'react-router-dom';
import TimeRecorder from '@/components/molecules/TimeRecorder/TimeRecorder';
import MemoRecorder from '@/components/molecules/MemoRecorder/MemoRecorder';

interface NameProps {
  name: string;
  recordName: string;
  recordId: number;
}

const DiaperPage = ({ name, recordName, recordId }: NameProps) => {
  const recordDetails = useGetRecordDetails(recordName, recordId);
  const selectedDate = useRecoilValue(selectedDateState);

  const [createdTime, setCreatedTime] = useState(recordDetails.createdTime);
  const [memo, setMemo] = useState(recordDetails.memo);

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
      pees: 'diaperId',
      poops: 'diaperId',
      hospitals: 'healthId',
      medications: 'healthId',
      snacks: 'mealId',
    };

    const idField: string = idFieldMap[recordName] || 'extraId';

    return {
      [idField]: recordId,
      createdTime: createdTime,
      memo: memo,
    };
  };

  const handleUpdate = async () => {
    const currentRecord: Record = createRecord(
      recordName,
      recordId,
      createdTime,
      memo
    );
    await updateRecordMutation.mutateAsync({
      record: currentRecord,
      queryName: recordName,
    });
    RouteHandler();
  };

  return (
    <>
      <Back>{name + ' 상세페이지'}</Back>
      <S.DiaperPageContainer>
        <S.DiaperPageWrapper>
          <S.Divider>
            <TimeRecorder
              initialTime={createdTime}
              selectedDate={selectedDate}
              setCreatedTime={setCreatedTime}
            ></TimeRecorder>
          </S.Divider>
          <S.Divider>
            <MemoRecorder setMemo={setMemo} placeholder={memo}></MemoRecorder>
          </S.Divider>
          <Button option="activated" size="large" onClick={handleUpdate}>
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
