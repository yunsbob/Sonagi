import { useQuery } from '@tanstack/react-query';
import { getAllCategoryRecords } from '@/apis/Record/recordAPI';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchCounterState } from '@/states/fetchCounterState';

const useGetAllCategoryRecords = (babyId: number, date: string) => {
  const fetchCounter = useRecoilValue(fetchCounterState);
  const { data: records } = useQuery(
    ['record', babyId, date, fetchCounter], //으악... babyId를 넣었으니 날짜 변경이 감지가 안됐던 것 ㅠㅠ
    () => {
      console.log('fetched');
      // setFetchCounter(prev => prev + 1);
      return getAllCategoryRecords(babyId, date);
    },
    {
      enabled: Boolean(babyId),
    }
  );
  return records;
};

export { useGetAllCategoryRecords };
