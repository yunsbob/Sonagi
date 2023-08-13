import { getMealStatistics } from '@/apis/Statistic/statisticApi';
import { PeriodType } from '@/types/card';
import { useQuery } from '@tanstack/react-query';

const useGetMealStatistics = (
  babyId: number,
  period: PeriodType,
  date: string
) => {
  const { data: mealStatistic } = useQuery(
    ['mealStatistics', babyId, date],
    () => getMealStatistics(babyId, period, date)
  );

  return mealStatistic;
};

export { useGetMealStatistics };
