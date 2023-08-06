import { DiaperBarGraph } from '@/components/molecules/BarGraph/Diaper/DiaperBarGraph';
import { MealBarGraph } from '@/components/molecules/BarGraph/Meal/MealBarGraph';
import { PumpingBreastBarGraph } from '@/components/molecules/BarGraph/PumpingBreast/PumpingBreastBarGraph';
import { Card } from '@/components/organisms/Card/Card';
import { GraphByWeekContainer } from '@/components/organisms/GraphByWeek/GraphByWeek.style';
import { selectedCategoryState } from '@/states/CategoryState';
import { useRecoilValue } from 'recoil';
import { PATH } from '@/constants/path';

const GraphByWeek = () => {
  const currentCategory = useRecoilValue(selectedCategoryState(PATH.GRAPH));

  console.log(currentCategory);

  return (
    <GraphByWeekContainer className="scrollable">
      {currentCategory === 'Meal' && <MealBarGraph />}
      {currentCategory === 'Diaper' && <DiaperBarGraph />}
      {currentCategory === 'Pump' && <PumpingBreastBarGraph />}
      <Card />
    </GraphByWeekContainer>
  );
};

export { GraphByWeek };
