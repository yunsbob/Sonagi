import { instance } from '@/apis/instance';
import { BabyMemo } from '@/types';

// 일기 등록
const addIllness = async (memo: BabyMemo) => {
  try {
    await instance.post('/illness', memo);
    console.log('memoAPI.ts success');
  } catch {
    new Error('Illness Memo Register Error');
    console.log('memoAPI.ts error');
  }
};
export { addIllness };
