import { GrapByDayContainer } from '@/components/organisms/GraphByDay/GraphByDay.styles';
// import { Card } from '@/components/organisms/Card/Card';
import DoughnutChart from '@/components/molecules/DoughnutChart/DoughnutChart';
import { useGetMealStatistics } from '@/apis/Statistic/Queries/useGetMealStatistics';
import { useRecoilValue } from 'recoil';
import { selectedBabyState } from '@/states/babyState';
import { BabiesOfUser, Category } from '@/types';
import { selectedDateState } from '@/states/dateState';
import { selectedCategoryState } from '@/states/categoryState';
import { PATH } from '@/constants/path';
// import { MealCard } from '@/components/organisms/Card/MealCard';
import { useGetDiaperStatistics } from '@/apis/Statistic/Queries/useGetDiaperStatistics';
import { DiaperCard } from '@/components/organisms/Card/DiaperCard';
import { SleepCard } from '@/components/organisms/Card/SleepCard';
import { useGetSleepStatistics } from '@/apis/Statistic/Queries/useGetSleepStatistics';
import { useGetPumpStatistics } from '@/apis/Statistic/Queries/useGetPumpStatistics';
import { useGetActivityStatistics } from '@/apis/Statistic/Queries/useGetActivityStatistics';
import { useGetHealthStatistics } from '@/apis/Statistic/Queries/useGetHealthStatistics';
import { useGetExtraStatistics } from '@/apis/Statistic/Queries/useGetExtraStatistics';
import { PumpCard } from '@/components/organisms/Card/PumpCard';
import { ActivityCard } from '@/components/organisms/Card/ActivityCard';
import { HealthCard } from '@/components/organisms/Card/HealthCard';
import { ExtraCard } from '@/components/organisms/Card/ExtraCard';
import React, { Suspense, lazy } from 'react';
import LoadingPage from '@/pages/LoadingPage/LoadingPage';

const mealCardPromise = import('@/components/organisms/Card/MealCard');

const MealCard = React.lazy(() =>
  mealCardPromise.then(({ MealCard }) => ({ default: MealCard }))
);

const GraphByDay = () => {
  const currentCategory: Category = useRecoilValue(
    selectedCategoryState(PATH.GRAPH)
  );
  const babyInfo: BabiesOfUser = useRecoilValue(selectedBabyState);
  const date = useRecoilValue(selectedDateState);

  const mealStatistics = useGetMealStatistics(babyInfo.babyId, 'day', date);
  const diaperStatistics = useGetDiaperStatistics(babyInfo.babyId, 'day', date);
  const sleepStatistics = useGetSleepStatistics(babyInfo.babyId, 'day', date);
  const pumpStatistics = useGetPumpStatistics(babyInfo.babyId, 'day', date);
  const activityStatistics = useGetActivityStatistics(
    babyInfo.babyId,
    'day',
    date
  );
  const healthStatistics = useGetHealthStatistics(babyInfo.babyId, 'day', date);
  const extraStatistics = useGetExtraStatistics(babyInfo.babyId, 'day', date);

  console.log(mealStatistics);

  return (
    <Suspense fallback={<LoadingPage />}>
      <GrapByDayContainer className="scrollable">
        <DoughnutChart />
        {currentCategory === 'Meal' && <MealCard data={mealStatistics} />}
        {currentCategory === 'Diaper' && <DiaperCard data={diaperStatistics} />}
        {currentCategory === 'Sleep' && <SleepCard data={sleepStatistics} />}
        {currentCategory === 'Pump' && <PumpCard data={pumpStatistics} />}
        {currentCategory === 'Activity' && (
          <ActivityCard data={activityStatistics} />
        )}
        {currentCategory === 'Health' && <HealthCard data={healthStatistics} />}
        {currentCategory === 'Extra' && <ExtraCard data={extraStatistics} />}
      </GrapByDayContainer>
    </Suspense>
  );
};

export { GraphByDay };
