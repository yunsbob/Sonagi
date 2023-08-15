import { DiaperBarGraph } from '@/components/molecules/BarChart/Diaper/DiaperBarGraph';
import { MealBarGraph } from '@/components/molecules/BarChart/Meal/MealBarGraph';
import { PumpingBreastBarGraph } from '@/components/molecules/BarChart/PumpingBreast/PumpingBreastBarGraph';
// import { Card } from '@/components/organisms/Card/Card';
import { GraphByWeekContainer } from '@/components/organisms/GraphByWeek/GraphByWeek.style';
import { selectedCategoryState } from '@/states/categoryState';
import { useRecoilValue } from 'recoil';
import { PATH } from '@/constants/path';
import { HealthBarGraph } from '@/components/molecules/BarChart/Health/HealthBarGraph';
import { useGetAllStatistics } from '@/apis/Statistic/Queries/useGetAllStatistics';
import { BabiesOfUser } from '@/types';
import { selectedBabyState } from '@/states/babyState';
import { selectedDateState } from '@/states/dateState';
import { MealCard } from '@/components/organisms/Card/MealCard';
import { DiaperCard } from '@/components/organisms/Card/DiaperCard';
import { PumpCard } from '@/components/organisms/Card/PumpCard';
import { SleepCard } from '@/components/organisms/Card/SleepCard';
import { ActivityCard } from '@/components/organisms/Card/ActivityCard';
import { HealthCard } from '@/components/organisms/Card/HealthCard';
import { ExtraCard } from '@/components/organisms/Card/ExtraCard';

const GraphByWeek = () => {
  const currentCategory = useRecoilValue(selectedCategoryState(PATH.GRAPH));

  const babyInfo: BabiesOfUser = useRecoilValue(selectedBabyState);
  const date = useRecoilValue(selectedDateState);

  const getGraphDatas = useGetAllStatistics(babyInfo.babyId, 'week', date);

  return (
    <GraphByWeekContainer className="scrollable">
      {currentCategory === 'Meal' && (
        <>
          <MealBarGraph />
          <MealCard data={getGraphDatas[0].data} />
        </>
      )}
      {currentCategory === 'Diaper' && (
        <>
          <DiaperBarGraph />
          <DiaperCard data={getGraphDatas[1].data} />
        </>
      )}
      {currentCategory === 'Sleep' && (
        <>
          <SleepCard data={getGraphDatas[2].data} />
        </>
      )}
      {currentCategory === 'Pump' && (
        <>
          <PumpingBreastBarGraph />
          <PumpCard data={getGraphDatas[3].data} />
        </>
      )}
      {currentCategory === 'Activity' && (
        <>
          <ActivityCard data={getGraphDatas[4].data} />
        </>
      )}
      {currentCategory === 'Health' && (
        <>
          <HealthBarGraph />
          <HealthCard data={getGraphDatas[5].data} />
        </>
      )}
      {currentCategory === 'Extra' && (
        <>
          <ExtraCard data={getGraphDatas[6].data} />
        </>
      )}
    </GraphByWeekContainer>
  );
};

export { GraphByWeek };
