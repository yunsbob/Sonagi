// mutation을 수행하는 custom Hook
import { useMutation } from '@tanstack/react-query';
import { RecordTypeA } from '@/types/recordTypes';
import { addRecordTypeA } from '@/apis/Record/recordAPI';

interface UseAddRecordTypeAProps extends RecordTypeA {
  type: string;
}

const useAddRecordTypeA = () => {
  // const userInfo = useRecoilValue(userInfoState);
  // const queryClient = useQueryClient();4
  return useMutation(
    ({ type, ...recordTypeAAttributes }: UseAddRecordTypeAProps) =>
      addRecordTypeA(type, recordTypeAAttributes),
    {
      onSuccess: () => {
        // queryClient.invalidateQueries(['newRecordTypeA', userInfo.userId]);
      },
      onError: (err: Error) => {
        console.log(err);
      },
    }
  );
};

export { useAddRecordTypeA };
