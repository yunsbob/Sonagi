import { useMutation } from '@tanstack/react-query';
import { RecordTypeB } from '@/types/recordTypes';
import { addRecordTypeB } from '@/apis/Record/recordAPI';

interface UseAddRecordTypeBProps extends RecordTypeB {
  type: string;
}

const useAddRecordTypeB = () => {
  return useMutation(
    ({ type, ...recordTypeBAttributes }: UseAddRecordTypeBProps) =>
      addRecordTypeB(type, recordTypeBAttributes),
    {
      onSuccess: () => {},
      onError: (err: Error) => {
        console.log(err);
      },
    }
  );
};

export { useAddRecordTypeB };
