import { deleteCoparent } from '@/apis/Baby/babyAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { selectedBabyState } from '@/states/babyState';

interface CoparentProps {
  babyId: number;
  userId: number;
}

const useDeleteCoparent = () => {
  const queryClient = useQueryClient();
  const selectedBaby = useRecoilValue(selectedBabyState);

  return useMutation(
    ({ babyId, userId }: CoparentProps) => deleteCoparent(babyId, userId),
    {
      onSuccess: () => {
        console.log('삭제성공');
      },
      onError: (err: Error) => {
        console.log(err);
      },
    }
  );
};

export { useDeleteCoparent };
