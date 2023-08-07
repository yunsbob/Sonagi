import { useMutation } from '@tanstack/react-query';
import { Baby } from '@/types';
import { addBaby } from '@/apis/Baby/babyAPI';

const useAddBaby = () => {
  return useMutation((baby: Baby) => addBaby(baby), {
    onSuccess: () => {},
    onError: (err: Error) => {
      console.log(err);
    },
  });
};

export { useAddBaby };
