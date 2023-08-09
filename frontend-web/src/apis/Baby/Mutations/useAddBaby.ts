import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Baby } from '@/types';
import { addBaby } from '@/apis/Baby/babyAPI';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '@/states/UserState';

const useAddBaby = () => {
  const userInfo = useRecoilValue(userInfoState);
  const queryClient = useQueryClient();
  return useMutation((baby: Baby) => addBaby(baby), {
    onSuccess: () => {
      queryClient.invalidateQueries(['baby', userInfo.userId]);
    },
    onError: (err: Error) => {
      console.log(err);
    },
  });
};

export { useAddBaby };
