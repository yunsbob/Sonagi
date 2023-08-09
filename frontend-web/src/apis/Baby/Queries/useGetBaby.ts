import { useQuery } from '@tanstack/react-query';
import { getBaby } from '@/apis/Baby/babyAPI';
import { BabyInfoForBar } from '@/types';

const useGetBaby = (userId: number) => {
  return useQuery(['baby', userId], () => getBaby(userId), {
    onSuccess: (data: BabyInfoForBar[]) => {
      // TODO: 2 리코일 저장
      return data;
    },
    onError: (err: Error) => {
      console.log('Error fetching baby data:', err.message);
    },
    suspense: true,
  });
};

export { useGetBaby };
