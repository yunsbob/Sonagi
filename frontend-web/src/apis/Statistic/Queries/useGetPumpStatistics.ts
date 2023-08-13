import { getPumpStatistics } from '@/apis/Statistic/statisticApi';
import { PeriodType } from '@/types/card';
import { useQuery } from '@tanstack/react-query';

const useGetPumpStatistics = (
  babyId: number,
  period: PeriodType,
  date: string
) => {
  const { data: pumpStatistic } = useQuery(
    ['pumpStatistics', babyId, date],
    () => getPumpStatistics(babyId, period, date)
  );

  return pumpStatistic;
};

export { useGetPumpStatistics };
