import { useMutation } from '@tanstack/react-query';
import { updateRecord } from '@/apis/Record/recordAPI';
import { CombinedRecord } from '@/types/recordTypes';

// TODO: 타입지정

const useUpdateRecord = () => {
  return useMutation((record: CombinedRecord) => updateRecord(record), {});
};

export { useUpdateRecord };
