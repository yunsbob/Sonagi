import { DiaperBarGraph } from '@/components/molecules/BarChart/Diaper/DiaperBarGraph';
import { MealBarGraph } from '@/components/molecules/BarChart/Meal/MealBarGraph';
import { PumpingBreastBarGraph } from '@/components/molecules/BarChart/PumpingBreast/PumpingBreastBarGraph';
import { Card } from '@/components/organisms/Card/Card';
import { GraphByWeekContainer } from '@/components/organisms/GraphByWeek/GraphByWeek.style';
import { selectedCategoryState } from '@/states/categoryState';
import { useRecoilValue } from 'recoil';
import { PATH } from '@/constants/path';
import { HealthBarGraph } from '@/components/molecules/BarChart/Health/HealthBarGraph';

const GraphByWeek = () => {
  const currentCategory = useRecoilValue(selectedCategoryState(PATH.GRAPH));

  console.log(currentCategory);

  return (
    <GraphByWeekContainer className="scrollable">
      {currentCategory === 'Meal' && <MealBarGraph />}
      {currentCategory === 'Diaper' && <DiaperBarGraph />}
      {currentCategory === 'Pump' && <PumpingBreastBarGraph />}
      {currentCategory === 'Health' && <HealthBarGraph />}
      <Card />
    </GraphByWeekContainer>
  );
};

export { GraphByWeek };
