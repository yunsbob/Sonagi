import { getActivityStatistics } from '@/apis/Statistic/statisticApi';
import { PeriodType } from '@/types/card';
import { useQuery } from '@tanstack/react-query';

const useGetActivityStatistics = (
  babyId: number,
  period: PeriodType,
  date: string
) => {
  const { data: activityStatistic } = useQuery(
    ['activityStatistics', babyId, date, period],
    () => getActivityStatistics(babyId, period, date)
  );

  return activityStatistic;
};

export { useGetActivityStatistics };
