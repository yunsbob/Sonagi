import { useQuery } from '@tanstack/react-query';
import { getAllCategoryRecords } from '@/apis/Record/recordAPI';

const useGetAllCategoryRecords = (babyId: number, date: string) => {
  const { data: records } = useQuery(
    ['record', babyId],
    () => getAllCategoryRecords(babyId, date),
    {
      enabled: Boolean(babyId),
    }
  );
  return records;
};

export { useGetAllCategoryRecords };
