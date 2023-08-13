// getAllCategoryRecrords 훅이 너무 잦은 Suspense fallback 사용을 유도하여
// 특정시간 이상 지연될때만 fallback 사용하게 만드는 커스텀 훅

import { getAllCategoryRecords } from '@/apis/Record/recordAPI';
import { useQuery } from '@tanstack/react-query';

const MINIMUM_LOADING_TIME = 1500; // 0.5 seconds

export const useDelayedQuery = (babyId: number, date: string) => {
  const startTime = Date.now();

  return useQuery(['record', babyId, date], () =>
    getAllCategoryRecords(babyId, date).then(data => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < MINIMUM_LOADING_TIME) {
        return new Promise(res =>
          setTimeout(() => res(data), MINIMUM_LOADING_TIME - elapsedTime)
        );
      }
      return data.data;
    })
  );
};
