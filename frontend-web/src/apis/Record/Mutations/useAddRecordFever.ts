import { useMutation } from '@tanstack/react-query';
import { Fever } from '@/types/recordTypes';
import { addRecordFever } from '@/apis/Record/recordAPI';

interface UseAddRecordFeverProps extends Fever {
  type: string;
}

const useAddRecordFever = () => {
  return useMutation(
    ({ type, ...recordFeverAttributes }: UseAddRecordFeverProps) =>
      addRecordFever(type, recordFeverAttributes),
    {
      onSuccess: () => {},
      onError: (err: Error) => {
        console.log(err);
      },
    }
  );
};

export { useAddRecordFever };
