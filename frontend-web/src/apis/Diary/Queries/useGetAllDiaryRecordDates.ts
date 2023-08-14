import { useQuery } from '@tanstack/react-query';
import { getAllDiariesRecord } from '@/apis/Diary/diaryAPI';

const useGetAllDiaryRecordDates = (babyId: number) => {
  const { data: records } = useQuery(['diaryRecordDates', babyId], () =>
    getAllDiariesRecord(babyId)
  );
  return records;
};

export { useGetAllDiaryRecordDates };
