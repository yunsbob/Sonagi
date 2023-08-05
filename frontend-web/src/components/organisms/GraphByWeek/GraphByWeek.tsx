import { MealBarGraph } from '@/components/molecules/BarGraph/Meal/MealBarGraph';
import { Card } from '@/components/organisms/Card/Card';
import { GraphByWeekContainer } from '@/components/organisms/GraphByWeek/GraphByWeek.style';
import { selectedCategoryState } from '@/states/CategoryState';
import { useRecoilValue } from 'recoil';

const GraphByWeek = () => {
  const currentCategory = useRecoilValue(selectedCategoryState);

  console.log(currentCategory);

  return (
    <GraphByWeekContainer className="scrollable">
      {currentCategory === 'Meal' && <MealBarGraph />}
      <Card />
    </GraphByWeekContainer>
  );
};

export { GraphByWeek };
