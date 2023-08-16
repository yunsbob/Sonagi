import { useQuery } from '@tanstack/react-query';
import { getDiariesAtWriteDay } from '@/apis/Diary/diaryAPI';
import { useRecoilState } from 'recoil';
import { diaryRecordList } from '@/states/diaryState';
import { getIllness } from '@/apis/Memo/memoAPI';

const useGetIllness = (babyId: number) => {
  const { data } = useQuery(['illness', babyId], () => getIllness(babyId));
  return data;
};

export { useGetIllness };
