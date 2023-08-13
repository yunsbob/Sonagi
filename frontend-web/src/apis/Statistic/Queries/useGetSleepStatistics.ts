import { getSleepStatistics } from '@/apis/Statistic/statisticApi';
import { PeriodType } from '@/types/card';
import { useQuery } from '@tanstack/react-query';

const useGetSleepStatistics = (
  babyId: number,
  period: PeriodType,
  date: string
) => {
  const { data: sleepStatistic } = useQuery(
    ['sleepStatistics', babyId, date],
    () => getSleepStatistics(babyId, period, date)
  );

  return sleepStatistic;
};

export { useGetSleepStatistics };
