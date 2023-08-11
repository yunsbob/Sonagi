// mutation을 수행하는 custom Hook
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RecordTypeA } from '@/types/recordTypes';
// import addRecord

// interface AddRecord {
//   title: string;
//   description: string;
// }

// export {};

// export function useAddRecord() {
// return useMutation((newRecord: AddRecord) =>
//   instance.post('/record', newRecord)
// );
// }

//useMutation 훅은 Promise를 반환하는 함수를 인자로 받습니다. 이 함수는 실제로 API를 호출하여 데이터를 변경하는 작업을 수행합니다.

//이렇게 react-query를 사용하여 API 호출을 캡슐화하면 컴포넌트에서는 이 custom hook을 호출하여 간단하게 데이터를 가져오거나 변경할 수 있습니다.
