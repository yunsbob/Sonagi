// mutation을 수행하는 custom Hook
import { useMutation } from '@tanstack/react-query';
import { RecordTypeA } from '@/types/recordTypes';
import { addRecordTypeA } from '@/apis/Record/recordAPI';
import { useRecoilState } from 'recoil';

interface UseAddRecordTypeAProps extends RecordTypeA {
  type: string;
}

const useAddRecordTypeA = () => {
  // const [allRecords, setAllRecords] = useRecoilState(recordedList);
  // const userInfo = useRecoilValue(userInfoState);
  // const queryClient = useQueryClient();4
  return useMutation(
    ({ type, ...recordTypeAAttributes }: UseAddRecordTypeAProps) =>
      addRecordTypeA(type, recordTypeAAttributes),
    {
      onSuccess: newRecord => {
        console.log(newRecord);
        // 새로운 기록을 기존 기록목록에 추가
        // setAllRecords(prevRecords => [...prevRecords, newRecord]);
        // queryClient.invalidateQueries(['newRecordTypeA', userInfo.userId]);
      },
      onError: (err: Error) => {
        console.log(err);
      },
    }
  );
};

export { useAddRecordTypeA };
