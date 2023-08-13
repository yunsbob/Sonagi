// mutation을 수행하는 custom Hook
import { useMutation } from '@tanstack/react-query';
import { RecordTypeA } from '@/types/recordTypes';
import { addRecordTypeA } from '@/apis/Record/recordAPI';

interface UseAddRecordTypeAProps extends RecordTypeA {
  type: string;
}

const useAddRecordTypeA = () => {
  return useMutation(
    ({ type, ...recordTypeAAttributes }: UseAddRecordTypeAProps) =>
      addRecordTypeA(type, recordTypeAAttributes),
    {
      onSuccess: () => {},
      onError: (err: Error) => {
        console.log(err);
      },
    }
  );
};

export { useAddRecordTypeA };
