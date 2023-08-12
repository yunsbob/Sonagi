import { useQuery } from '@tanstack/react-query';
import { getBaby } from '@/apis/Baby/babyAPI';
import { useRecoilState } from 'recoil';
import { babiesOfUserState } from '@/states/babyState';
import { BabiesOfUser } from '@/types';

// TODO: onSuccess랑 onError 삭제해주기
// 채림이꺼 merge하고 !
const useGetBaby = (userId: number): BabiesOfUser[] => {
  // // const [babyInfo, setBabyInfo] = useRecoilState(babiesOfUserState);
  // setBabyInfo(data)

  const { data } = useQuery(['baby', userId], () => getBaby(userId));
  return data;

  // return useQuery(['baby', userId], () => getBaby(userId), {
  //   onSuccess: (data: BabiesOfUser[]) => {
  //     setBabyInfo(data);
  //     return data;
  //   },
  //   onError: (err: Error) => {
  //     console.log('Error fetching baby data:', err.message);
  //   },
  // });
};

export { useGetBaby };
