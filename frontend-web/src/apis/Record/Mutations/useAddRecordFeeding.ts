import { useMutation } from '@tanstack/react-query';
import { Feeding } from '@/types/recordTypes';
import { addRecordFeeding } from '@/apis/Record/recordAPI';

interface UseAddRecordFeedingProps extends Feeding {
  type: string;
}

const useAddRecordFeeding = () => {
  return useMutation(
    ({ type, ...recordFeedingAttributes }: UseAddRecordFeedingProps) =>
      addRecordFeeding(type, recordFeedingAttributes),
    {
      onSuccess: () => {},
      onError: (err: Error) => {
        console.log(err);
      },
    }
  );
};

export { useAddRecordFeeding };
