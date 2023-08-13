import { getExtraStatistics } from '@/apis/Statistic/statisticApi';
import { PeriodType } from '@/types/card';
import { useQuery } from '@tanstack/react-query';

const useGetExtraStatistics = (
  babyId: number,
  period: PeriodType,
  date: string
) => {
  const { data: extraStatistic } = useQuery(
    ['extraStatistics', babyId, date],
    () => getExtraStatistics(babyId, period, date)
  );

  return extraStatistic;
};

export { useGetExtraStatistics };
