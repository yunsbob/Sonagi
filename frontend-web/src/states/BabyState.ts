import { atom } from 'recoil';
import { Baby } from '@/types';
import { recoilPersist } from 'recoil-persist';

// localStorage에 저장할 필요가 있겠...쬬?
const { persistAtom } = recoilPersist({
  key: 'BabyState',
  storage: localStorage,
});

// 아기 정보
export const babyInfoState = atom<Baby>({
  key: 'babyInfoState',
  default: {} as Baby,
  effects_UNSTABLE: [persistAtom],
});
