import { selector } from 'recoil';
import { userInfoState } from '@/states/userState';
import { getBaby } from '@/apis/Baby/babyAPI';

export const babyDataQuery = selector({
  key: 'babyDataQuery',
  get: async ({ get }) => {
    const userInfo = get(userInfoState);
    const response = await getBaby(userInfo.userId);
    return response.data;
  },
});
