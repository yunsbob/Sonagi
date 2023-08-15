import { useQuery } from '@tanstack/react-query';
import { getAllDiariesRecord } from '@/apis/Diary/diaryAPI';
import { useRecoilState } from 'recoil';
import { writtenDiaryDateList } from '@/states/diaryState';

const useGetAllDiaryRecordDates = (babyId: number) => {
  const { data } = useQuery(['diaryRecordDates', babyId], () =>
    getAllDiariesRecord(babyId)
  );
  return data;
};

export { useGetAllDiaryRecordDates };
