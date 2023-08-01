import Button from '@/components/atoms/Button/Button';
import { RecordBarContainer } from '@/components/molecules/RecordBar/RecordBar.styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedCategory } from '@/states/CategoryState';
import { recordedValues, recordsByCategory } from '@/states/RecordState';
import theme from '@/styles/theme';
import { categoryToColorMap } from '@/constants/categoryToColorMap';

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
  const colorKey = categoryToColorMap[currentCategory || 'All'];
  const strokeColor = theme.color[colorKey];
  console.log(strokeColor);

  const handleClick = (recordType: string) => {
    const date = new Date();
    const time = `${date.getHours()} : ${date.getMinutes()}`;
    setRecordBlocks(oldRecordBlocks => [
      ...oldRecordBlocks,
      { recordType, time, color: strokeColor },
    ]);
  };
  console.log(recordBlocks);

  return (
    <RecordBarContainer>
      {records.map((record, index) => (
        <Button
          variant="record"
          size="xSmall"
          key={index}
          style={{ padding: '0.8rem', alignItems: 'center', display: 'flex' }}
          $borderColor={strokeColor}
          onClick={() => handleClick(record.type)}
        >
          {record.type}
        </Button>
      ))}
    </RecordBarContainer>
  );
};

export default RecordBar;
