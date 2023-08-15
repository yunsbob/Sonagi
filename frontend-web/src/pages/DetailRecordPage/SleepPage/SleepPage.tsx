import TimeRecorder from '@/components/molecules/TimeRecorder/TimeRecorder';
import AmountRecorder from '@/components/molecules/AmountRecorder/AmountRecorder';
import MemoRecorder from '@/components/molecules/MemoRecorder/MemoRecorder';
import BreastFeedRecorder from '@/components/molecules/BreastFeedRecorder/BreastFeedRecorder';
import * as S from '@/pages/DetailRecordPage/SleepPage/SleepPage.style';
import Back from '@/components/atoms/Back/Back';
import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetRecordDetails } from '@/apis/Record/Queries/useGetRecordDetails';
import { useUpdateRecord } from '@/apis/Record/Mutations/useUpdateRecord';
import { useRecoilValue } from 'recoil';
import { selectedDateState } from '@/states/dateState';

interface NameProps {
  name: string;
  recordName: string;
  recordId: number;
}

const SleepPage = ({ name, recordName, recordId }: NameProps) => {
  const recordDetails = useGetRecordDetails(recordName, recordId);
  const selectedDate = useRecoilValue(selectedDateState); // YYYY-DD-MM

  const [createdTime, setCreatedTime] = useState(recordDetails.createdTime);
  // end타임도 필요할수도 있겠다
  const [endTime, setEndTime] = useState(recordDetails.endTime);
  const [memo, setMemo] = useState('');

  const navigate = useNavigate();
  const RouteHandler = useCallback(() => navigate(-1), [navigate]);
  const updateRecordMutation = useUpdateRecord();

  type Record = {
    [key: string]: number | string;
  };

  return (
    <>
      <Back>{name + ' 상세페이지' + recordName}</Back>
      <S.SleepPageContainer>
        <S.SleepPageWrapper>
          <S.Divider>
            {/* <TimeRecorder name="시작 시간"></TimeRecorder> */}
          </S.Divider>
          <S.Divider>
            {/* <TimeRecorder name="종료 시간"></TimeRecorder> */}
          </S.Divider>
          <S.Divider>
            <MemoRecorder setMemo={setMemo} placeholder={memo}></MemoRecorder>
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
        </S.SleepPageWrapper>
      </S.SleepPageContainer>
    </>
  );
};

export default SleepPage;
