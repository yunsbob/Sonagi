import TimeRecorder from '@/components/molecules/TimeRecorder/TimeRecorder';
import MemoRecorder from '@/components/molecules/MemoRecorder/MemoRecorder';
import BreastFeedRecorder from '@/components/molecules/BreastFeedRecorder/BreastFeedRecorder';
import * as S from '@/pages/DetailRecordPage/FeedingPage/FeedingPage.style';
import Back from '@/components/atoms/Back/Back';
import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';
import { useGetRecordDetails } from '@/apis/Record/Queries/useGetRecordDetails';
import { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedDateState } from '@/states/dateState';
import { useUpdateRecord } from '@/apis/Record/Mutations/useUpdateRecord';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

interface NameProps {
  name: string;
  recordName: string;
  recordId: number;
}

const FeedingPage = ({ name, recordName, recordId }: NameProps) => {
  const recordDetails = useGetRecordDetails(recordName, recordId);
  const selectedDate = useRecoilValue(selectedDateState);

  const [isLeft, setIsLeft] = useState(true);
  // console.log(isLeft);
  console.log(recordDetails);
  const [createdLeftTime, setCreatedLeftTime] = useState(
    recordDetails.leftStartTime
  );
  const [createdRightTime, setCreatedRightTime] = useState(
    recordDetails.rightStartTime
  );
  const [endLeftTime, setEndLeftTime] = useState(recordDetails.leftEndTime);
  const [endRightTime, setEndRightTime] = useState(recordDetails.rightEndTime);
  const [memo, setMemo] = useState(recordDetails.memo);

  const navigate = useNavigate();
  const RouteHandler = useCallback(() => navigate(-1), [navigate]);
  const updateRecordMutation = useUpdateRecord();
  const queryClient = useQueryClient();

  const handleUpdate = async () => {
    const currentRecord = {
      mealId: recordId,
      createdLeftTime,
      createdRightTime,
      endLeftTime,
      endRightTime,
      memo,
    };
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
      <S.FeedingPageContainer>
        <S.FeedingPageWrapper className="scrollable">
          <S.Divider className="upperFeedingPageDivider">
            <BreastFeedRecorder
              isLeft={isLeft}
              setIsLeft={setIsLeft}
            ></BreastFeedRecorder>
          </S.Divider>
          {isLeft ? (
            <>
              <S.Divider>
                <TimeRecorder
                  key="left-start-time"
                  name="왼쪽 수유 시작 시간"
                  textSize="medium2"
                  initialTime={createdLeftTime}
                  selectedDate={selectedDate}
                  setCreatedTime={setCreatedLeftTime}
                ></TimeRecorder>
              </S.Divider>
              <S.Divider>
                <TimeRecorder
                  key="left-end-time"
                  name="왼쪽 수유 종료 시간"
                  textSize="medium2"
                  initialTime={endLeftTime}
                  selectedDate={selectedDate}
                  setCreatedTime={setEndLeftTime}
                ></TimeRecorder>
              </S.Divider>
            </>
          ) : (
            <>
              <S.Divider>
                <TimeRecorder
                  key="right-start-time"
                  name="오른쪽 수유 시작 시간"
                  textSize="medium2"
                  initialTime={createdRightTime}
                  selectedDate={selectedDate}
                  setCreatedTime={setCreatedRightTime}
                ></TimeRecorder>
              </S.Divider>
              <S.Divider>
                <TimeRecorder
                  key="right-end-time"
                  textSize="medium2"
                  name="오른쪽 수유 종료 시간"
                  initialTime={endRightTime}
                  selectedDate={selectedDate}
                  setCreatedTime={setEndRightTime}
                ></TimeRecorder>
              </S.Divider>
            </>
          )}

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
        </S.FeedingPageWrapper>
      </S.FeedingPageContainer>
    </>
  );
};

export default FeedingPage;
