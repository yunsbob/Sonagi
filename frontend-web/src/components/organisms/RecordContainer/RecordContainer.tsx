import React from 'react';
import { Text } from '@/components/atoms/Text/Text.styles';
import RecordBar from '@/components/molecules/RecordBar/RecordBar';
import RecordBlock from '@/components/molecules/RecordBlock/RecordBlock';
import { useRecoilValue } from 'recoil';
import { recordedValues } from '@/states/RecordState';
import { RecordContainerStyle } from '@/components/organisms/RecordContainer/RecordContainer.styles';
const RecordContainer: React.FC = () => {
  const recordedList = useRecoilValue(recordedValues);

  return (
    <RecordContainerStyle className="scrollable">
      {recordedList.map((record, index) => (
        <RecordBlock
          key={index}
          color={record.color}
          recordType={record.recordType}
          time={record.time}
        ></RecordBlock>
      ))}
      <RecordBar></RecordBar>
    </RecordContainerStyle>
  );
};

export default RecordContainer;
