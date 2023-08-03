import Button from '@/components/atoms/Button/Button';
import { RecordBarContainer } from '@/components/molecules/RecordBar/RecordBar.styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedCategory } from '@/states/CategoryState';
import { recordedValues, recordsByCategory } from '@/states/RecordState';
import { Text } from '@/components/atoms/Text/Text.styles';
import styled from 'styled-components';

const LowBorderButton = styled(Button)<{ $borderColor: string }>`
  border-color: ${({ $borderColor }) => $borderColor + '96'};
`;

export type RecordData = {
  recordType: string;
  time: string;
  color: string;
};

const RecordBar = () => {
  const [recordBlocks, setRecordBlocks] =
    useRecoilState<RecordData[]>(recordedValues);

  // useRecoilValue는 Recoil상태(atom이나 selector)의 현재 값을 읽어오는 것
  // 상태가 변경될 때마다 UI가 최신 상태를 반영
  const currentCategory = useRecoilValue(selectedCategory);
  const records = recordsByCategory[currentCategory || 'All'] || [];

  const handleClick = (recordType: string, color: string) => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const time = `${hours}:${minutes}`;

    setRecordBlocks(oldRecordBlocks => [
      ...oldRecordBlocks,
      { recordType, time, color },
    ]);
  };

  return (
    <RecordBarContainer>
      {records.map((record, index) => (
        <LowBorderButton
          option="default"
          size="xSmall"
          key={index}
          $borderColor={record.color}
          onClick={() => handleClick(record.type, record.color)}
        >
          <Text size="medium3">{record.type}</Text>
        </LowBorderButton>
      ))}
    </RecordBarContainer>
  );
};

export default RecordBar;
