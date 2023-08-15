import { useQuery } from '@tanstack/react-query';
import { getAllDiariesRecord } from '@/apis/Diary/diaryAPI';
import { useRecoilState } from 'recoil';
import { writtenDiaryDateList } from '@/states/diaryState';

const useGetAllDiaryRecordDates = (babyId: number) => {
  const { data: records } = useQuery(['diaryRecordDates', babyId], () =>
    getAllDiariesRecord(babyId)
  );
  const [recordedDateList, setRecordedDateList] =
    useRecoilState(writtenDiaryDateList);
  setRecordedDateList(records);
};

export { useGetAllDiaryRecordDates };
