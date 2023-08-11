import Button from '@/components/atoms/Button/Button';
import { RecordBarContainer } from '@/components/molecules/RecordBar/RecordBar.styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedCategoryState } from '@/states/categoryState';
import { Category, RecordData } from '@/types';
import { recordedValues, recordsByCategory } from '@/states/recordState';
import { Text } from '@/components/atoms/Text/Text.styles';
import { PATH } from '@/constants/path';
import { useState } from 'react';
import { RecordTypeA } from '@/types/recordTypes';

// const LowBorderButton = styled(Button)<{ $borderColor: string }>`
//   border-color: ${({ $borderColor }) => $borderColor + '96'};
// `;

interface RecordBarProps {
  onRecordUpdated: () => void;
}

const RecordBar = ({ onRecordUpdated }: RecordBarProps) => {
  const [recordBlocks, setRecordBlocks] =
    useRecoilState<RecordData[]>(recordedValues);

  // useRecoilValue는 Recoil상태(atom이나 selector)의 현재 값을 읽어오는 것
  // 상태가 변경될 때마다 UI가 최신 상태를 반영
  const currentCategory = useRecoilValue(selectedCategoryState(PATH.MAIN));
  const records = recordsByCategory[currentCategory || 'All'] || [];

  // const [recordTypeAState, setRecordTypeAState] = useState<RecordTypeA>({});

  const handleClick = (
    recordType: string,
    color: string,
    category: Category,
    queryName: string
  ) => {
    console.log('here', recordType, color, category, queryName);

    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const time = `${hours}:${minutes}`;

    setRecordBlocks(oldRecordBlocks => [
      ...oldRecordBlocks,
      { recordType, time, color, category },
    ]);

    // TODO:
    onRecordUpdated();
  };

  return (
    <RecordBarContainer>
      {records.map((record, index) => (
        <Button
          option="default"
          size="xSmall"
          key={index}
          $borderColor={record.color}
          onClick={() =>
            handleClick(
              record.type,
              record.color,
              record.category,
              record.queryName
            )
          }
        >
          <Text size="medium3">{record.type}</Text>
        </Button>
      ))}
    </RecordBarContainer>
  );
};

export default RecordBar;
