import Button from '@/components/atoms/Button/Button';
import { RecordBarContainer } from '@/components/molecules/RecordBar/RecordBar.styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedCategoryState } from '@/states/CategoryState';
import { Category } from '@/types';
import { recordedValues, recordsByCategory } from '@/states/RecordState';
import { Text } from '@/components/atoms/Text/Text.styles';
import { PATH } from '@/constants/path';

// const LowBorderButton = styled(Button)<{ $borderColor: string }>`
//   border-color: ${({ $borderColor }) => $borderColor + '96'};
// `;

export type RecordData = {
  recordType: string;
  time: string;
  color: string;
  category: Category;
};

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

  const handleClick = (
    recordType: string,
    color: string,
    category: Category
  ) => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const time = `${hours}:${minutes}`;

    setRecordBlocks(oldRecordBlocks => [
      ...oldRecordBlocks,
      { recordType, time, color, category },
    ]);

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
            handleClick(record.type, record.color, record.category)
          }
        >
          <Text size="medium3">{record.type}</Text>
        </Button>
      ))}
    </RecordBarContainer>
  );
};

export default RecordBar;
