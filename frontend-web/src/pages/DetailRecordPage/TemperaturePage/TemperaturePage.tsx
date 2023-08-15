import TimeRecorder from '@/components/molecules/TimeRecorder/TimeRecorder';
import AmountRecorder from '@/components/molecules/AmountRecorder/AmountRecorder';
import MemoRecorder from '@/components/molecules/MemoRecorder/MemoRecorder';
import * as S from '@/pages/DetailRecordPage/TemperaturePage/TemperaturePage.style';
import Back from '@/components/atoms/Back/Back';
import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';
import { useGetRecordDetails } from '@/apis/Record/Queries/useGetRecordDetails';
import { useCallback, useState } from 'react';
import { useUpdateRecord } from '@/apis/Record/Mutations/useUpdateRecord';
import { useRecoilValue } from 'recoil';
import { selectedDateState } from '@/states/dateState';
import { useNavigate } from 'react-router-dom';

interface NameProps {
  name: string;
  recordName: string;
  recordId: number;
}

const TemperaturePage = ({ name, recordName, recordId }: NameProps) => {
  // recordId로 해당 detailRecords 정보 get --- queryName과 id
  const recordDetails = useGetRecordDetails(recordName, recordId);
  // useQuery?

  // 리코일에서 user정보와 baby정보, 선택한 날짜 정보 가져와 사용
  const selectedDate = useRecoilValue(selectedDateState); // YYYY-DD-MM

  // 하위 컴포넌트에서 공동으로 사용 및 수정할 state 생성
  const [createdTime, setCreatedTime] = useState(recordDetails.createdTime);
  const [amount, setAmount] = useState(36.5); // 기본값은 36.5
  const [memo, setMemo] = useState(recordDetails.memo);

  const updateRecordMutation = useUpdateRecord();
  const navigate = useNavigate();
  const RouteHandler = useCallback(() => navigate(-1), [navigate]);

  const handleUpdate = async () => {
    const currentRecord = {
      healthId: recordId,
      createdTime,
      bodyTemperature: amount,
      memo,
    };
    await updateRecordMutation.mutateAsync({
      record: currentRecord,
      queryName: recordName,
    });
    RouteHandler();
  };

  return (
    <>
      <Back>{name + ' 상세페이지'}</Back>
      <S.TemperaturePageContainer>
        <S.TemperaturePageWrapper>
          <S.Divider>
            <TimeRecorder
              initialTime={createdTime}
              selectedDate={selectedDate}
              setCreatedTime={setCreatedTime}
            ></TimeRecorder>
          </S.Divider>
          <S.Divider>
            <AmountRecorder
              unitType="온도"
              unit="℃"
              unitArray={[-1, -0.5, -0.1, +0.1, +0.5, +1.0]}
              defaultValue={parseFloat(recordDetails.bodyTemperature)}
              minValue={35}
              maxValue={40}
              setAmount={setAmount}
            ></AmountRecorder>
          </S.Divider>
          <S.Divider>
            <MemoRecorder setMemo={setMemo} placeholder={memo}></MemoRecorder>
          </S.Divider>
          <Button option="activated" size="large" onClick={handleUpdate}>
            <Text size="headSmall" color={theme.color.white1}>
              등록하기
            </Text>
          </Button>
        </S.TemperaturePageWrapper>
      </S.TemperaturePageContainer>
    </>
  );
};

export default TemperaturePage;
