import { getDiaperStatistics } from '@/apis/Statistic/statisticApi';
import { PeriodType } from '@/types/card';
import { useQuery } from '@tanstack/react-query';

const useGetDiaperStatistics = (
  babyId: number,
  period: PeriodType,
  date: string
) => {
  const { data: diaperStatistic } = useQuery(
    ['diaperStatistics', babyId, date],
    () => getDiaperStatistics(babyId, period, date)
  );

  return diaperStatistic;
};

export { useGetDiaperStatistics };
