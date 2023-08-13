import { getHealthStatistics } from '@/apis/Statistic/statisticApi';
import { PeriodType } from '@/types/card';
import { useQuery } from '@tanstack/react-query';

const useGetHealthStatistics = (
  babyId: number,
  period: PeriodType,
  date: string
) => {
  const { data: healthStatistic } = useQuery(
    ['healthStatistics', babyId, date],
    () => getHealthStatistics(babyId, period, date)
  );

  return healthStatistic;
};

export { useGetHealthStatistics };
