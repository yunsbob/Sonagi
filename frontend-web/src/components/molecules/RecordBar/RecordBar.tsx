import Button from '@/components/atoms/Button/Button';
import { RecordBarContainer } from '@/components/molecules/RecordBar/RecordBar.styles';
import { useRecoilValue } from 'recoil';
import { selectedCategory } from '@/states/CategoryState';
import { recordsByCategory } from '@/states/RecordState';
import theme from '@/styles/theme';

const categoryToColorMap = {
  All: 'categoryExtra',
  Meal: 'categoryMeal',
  Diaper: 'categoryDiaper',
  Sleep: 'categorySleep',
  Pump: 'categoryPumpingBreast',
  Activity: 'categoryActivity',
  Health: 'categoryHealth',
  Extra: 'categoryExtra',
};

const RecordBar = () => {
  // useRecoilValue는 Recoil상태(atom이나 selector)의 현재 값을 읽어오는 것
  // 상태가 변경될 때마다 UI가 최신 상태를 반영
  const currentCategory = useRecoilValue(selectedCategory);
  const records = recordsByCategory[currentCategory || 'All'] || [];
  const colorKey = categoryToColorMap[currentCategory || 'All'];
  const strokeColor = theme.color[colorKey];
  console.log(strokeColor);

  return (
    <RecordBarContainer>
      {records.map((item, index) => (
        <Button
          variant="record"
          size="xSmall"
          key={index}
          style={{ padding: '0.8rem', alignItems: 'center', display: 'flex' }}
          $borderColor={strokeColor}
        >
          {item}
        </Button>
      ))}
    </RecordBarContainer>
  );
};

export default RecordBar;
