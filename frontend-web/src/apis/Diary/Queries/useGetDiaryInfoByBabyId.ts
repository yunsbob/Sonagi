import { useQuery } from '@tanstack/react-query';
import { getDiariesAtWriteDay } from '@/apis/Diary/diaryAPI';
import { useRecoilState } from 'recoil';
import { diaryRecordList } from '@/states/diaryState';

const useGetDiaryInfoByBabyId = (babyId: number, writeDay: string) => {
  const { data } = useQuery(['diaryRecordDateList', babyId, writeDay], () =>
    getDiariesAtWriteDay(babyId, writeDay)
  );
  return data;
};

export { useGetDiaryInfoByBabyId };
