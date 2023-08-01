import React from 'react';
import theme from '@/styles/theme';
import { Text } from '@/components/atoms/Text/Text.styles';
import RecordBar from '@/components/molecules/RecordBar/RecordBar';
import RecordBlock from '@/components/molecules/RecordBlock/RecordBlock';
import { useRecoilValue } from 'recoil';
import { recordedValues, records } from '@/states/RecordState';

const RecordContainer: React.FC = () => {
  const recordedList = useRecoilValue(recordedValues);

  return (
    <div className="scrollable">
      {recordedList.map((record, index) => (
        <Text size="headXLarge" key={index}>
          <RecordBlock
            color={record.color}
            recordType={record.recordType}
            time={record.time}
          ></RecordBlock>
        </Text>
      ))}
      <RecordBar></RecordBar>
    </div>
  );
};

export default RecordContainer;
