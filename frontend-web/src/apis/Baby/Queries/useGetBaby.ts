import { useQuery } from '@tanstack/react-query';
import { getBaby } from '@/apis/Baby/babyAPI';
import { useRecoilState } from 'recoil';
import { babiesOfUserState } from '@/states/babyState';
import { BabiesOfUser } from '@/types';

const useGetBaby = (userId: number) => {
  const [babyInfo, setBabyInfo] = useRecoilState(babiesOfUserState);

  return useQuery(['baby', userId], () => getBaby(userId), {
    onSuccess: (data: BabiesOfUser[]) => {
      setBabyInfo(data);
      return data;
    },
    onError: (err: Error) => {
      console.log('Error fetching baby data:', err.message);
    },
    suspense: true,
  });
};

export { useGetBaby };
