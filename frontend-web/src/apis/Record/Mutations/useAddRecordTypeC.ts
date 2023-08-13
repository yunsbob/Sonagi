import { useMutation } from '@tanstack/react-query';
import { RecordTypeC } from '@/types/recordTypes';
import { addRecordTypeC } from '@/apis/Record/recordAPI';

interface UseAddRecordTypeCProps extends RecordTypeC {
  type: string;
}

const useAddRecordTypeC = () => {
  return useMutation(
    ({ type, ...recordTypeCAttributes }: UseAddRecordTypeCProps) =>
      addRecordTypeC(type, recordTypeCAttributes),
    {
      onSuccess: () => {},
      onError: (err: Error) => {
        console.log(err);
      },
    }
  );
};

export { useAddRecordTypeC };
