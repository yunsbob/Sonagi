import { useQuery } from '@tanstack/react-query';
import { getAllCategoryRecords } from '@/apis/Record/recordAPI';

const useGetAllCategoryRecords = (babyId: number, date: string): --- => {
  const {data: ___} = useQuery(['record', babyId], () =>
    getAllCategoryRecords(babyId, date)
  );
  return ___;
};

export { useGetAllCategoryRecords }

// const useGetCoParent = (userId: number, babyId: number): User[] => {
//   const { data: coparent } = useQuery(['coParent', babyId], () =>
//     getCoParent(userId, babyId)
//   );

//   return coparent;
// };
