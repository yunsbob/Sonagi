import { useQuery } from '@tanstack/react-query'; //useQueries?
import { getBaby } from '@/apis/Baby/babyAPI';

// get할 때 이 안에서 Recoil에 저장해줘야 하나?
// 아뉘 별도로 해주자
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Baby } from '@/types';
import { babyInfoState } from '@/states/BabyState';

const useGetBaby = (userId: number) => {
  return useQuery(['baby', userId], () => getBaby(userId), {
    onSuccess: () => {},
    onError: (err: Error) => {
      console.log(err);
    },
  });
};

export { useGetBaby };
