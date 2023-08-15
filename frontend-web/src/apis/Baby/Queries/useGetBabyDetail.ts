import { getBabyDetail } from '@/apis/Baby/babyAPI';
import { Baby } from '@/types';
import { useQuery } from '@tanstack/react-query';

const useGetBabyDetail = (babyId: number, userId: number) => {
  const { data: babyInfo } = useQuery(['babyInfo', babyId], () =>
    getBabyDetail(4, 3)
  );
  console.log(babyInfo);
};

export { useGetBabyDetail };
