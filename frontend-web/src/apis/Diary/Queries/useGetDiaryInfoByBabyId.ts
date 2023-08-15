import { useQuery } from '@tanstack/react-query';
import { getDiariesAtWriteDay } from '@/apis/Diary/diaryAPI';
import { useRecoilState } from 'recoil';
import { diaryRecordList } from '@/states/diaryState';

const useGetDiaryInfoByBabyId = (babyId: number, writeDay: string) => {
  const { data: diaresByBabyIdAndWriteDay } = useQuery(
    ['diaryRecordDateList', babyId, writeDay],
    () => getDiariesAtWriteDay(babyId, writeDay)
  );
  const [diaries, setDiaries] = useRecoilState(diaryRecordList);
  setDiaries(diaresByBabyIdAndWriteDay.diaries);
};

export { useGetDiaryInfoByBabyId };
