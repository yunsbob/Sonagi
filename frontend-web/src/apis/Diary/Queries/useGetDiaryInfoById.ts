import { getDiaryRecordByDiaryId } from '@/apis/Diary/diaryAPI';
import { DiaryInfo } from '@/types/diaryTypes';
import { useQuery } from '@tanstack/react-query';

const useGetDiaryInfoById = (diaryId: number): DiaryInfo => {
  const { data: diaryInfoById } = useQuery(['diaryInfoById', diaryId], () =>
    getDiaryRecordByDiaryId(diaryId)
  );

  return diaryInfoById.diaryInfo;
};

export { useGetDiaryInfoById };
