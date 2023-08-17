import { atom } from 'recoil';

// 선택된 백신접종상태 아이디 저장
export const selectedVaccinationState = atom<number>({
  key: 'selectedVaccinationState',
  default: 1,
});
