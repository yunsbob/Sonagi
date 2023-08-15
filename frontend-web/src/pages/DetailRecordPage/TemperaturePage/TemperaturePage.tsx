import TimeRecorder from '@/components/molecules/TimeRecorder/TimeRecorder';
import AmountRecorder from '@/components/molecules/AmountRecorder/AmountRecorder';
import MemoRecorder from '@/components/molecules/MemoRecorder/MemoRecorder';
import * as S from '@/pages/DetailRecordPage/TemperaturePage/TemperaturePage.style';
import Back from '@/components/atoms/Back/Back';
import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';
import { useGetRecordDetails } from '@/apis/Record/Queries/useGetRecordDetails';
import { useEffect, useState } from 'react';
import { useUpdateRecord } from '@/apis/Record/Mutations/useUpdateRecord';
import { CombinedRecord } from '@/types/recordTypes';

interface NameProps {
  name: string;
  recordName: string;
  recordId: number;
}

const TemperaturePage: React.FC<NameProps> = ({
  name,
  recordName,
  recordId,
}) => {
  const recordDetails = useGetRecordDetails(recordName, recordId);
  const [currentRecord, setCurrentRecord] = useState<CombinedRecord | null>(
    null
  );
  const mutation = useUpdateRecord();

  const handleUpdate = () => {
    if (currentRecord) {
      mutation.mutate(currentRecord);
    }
  };

  useEffect(() => {
    if (recordDetails) {
      console.log('hhhhhhh', recordDetails);
    }
  }, [recordDetails]);

  return (
    <>
      <Back>{name + ' 상세페이지'}</Back>
      <S.TemperaturePageContainer>
        <S.TemperaturePageWrapper>
          <S.Divider>
            <TimeRecorder
              initialTime={recordDetails.createdTime}
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
            ></AmountRecorder>
          </S.Divider>
          <S.Divider>
            <MemoRecorder></MemoRecorder>
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
