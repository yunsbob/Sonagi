import { useQuery } from '@tanstack/react-query';
import { getDiariesAtWriteDay } from '@/apis/Diary/diaryAPI';
import { DiaryInfo } from '@/types/diaryTypes';

const useGetDiaryInfoByBabyId = (
  babyId: number,
  writeDay: string
): DiaryInfo[] => {
  const { data: diaresByBabyIdAndWriteDay } = useQuery(
    ['diaryRecordDateList', babyId, writeDay],
    () => getDiariesAtWriteDay(babyId, writeDay)
  );

  return diaresByBabyIdAndWriteDay.diaries;
};

export { useGetDiaryInfoByBabyId };
