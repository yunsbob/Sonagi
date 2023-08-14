import { useMutation } from '@tanstack/react-query';
import { updateRecord } from '@/apis/Record/recordAPI';

const useUpdateRecord = () => {
  return;
  // return useMutation((record: <커스텀타입>) => updateRecord(record), {
  //   onSuccess: () => {},
  //   onError: (err: Error) => {
  //     console.log(err);
  //   },
  // });
};

export { useUpdateRecord };

// UpdateRecord type 지정해줄때.. mealId,
