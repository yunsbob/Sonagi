import { useQuery } from '@tanstack/react-query'; //useQueries?
import { getBaby } from '@/apis/Baby/babyAPI';
// import { useSetRecoilState } from 'recoil';
// import { babyInfoState } from '@/states/BabyState';
import { BabyInfoForBar } from '@/types';

// get할 때 이 안에서 Recoil에 저장해줘야 하나?
// 아뉘 별도로 해주자
// import { Baby } from '@/types';
// import baby from '@/assets/images/img-baby.png';

const useGetBaby = (userId: number) => {
  // 인자 안 받아도 될듯
  //   const setBabyInfo = useSetRecoilState(babyInfoState);

  return useQuery(['baby', userId], () => getBaby(userId), {
    onSuccess: (data: BabyInfoForBar[]) => {
      // TODO: 2리코일 저장 (babies..(?_) 준홍아 이거 문법 맞니??)
      //   console.log(data, 'chelim');
      //   startTransition(() => {
      //     setBabyInfo(data);
      //   });
      console.log(data, 'dddd');
      return data;
    },
    onError: (err: Error) => {
      console.log('Error fetching baby data:', err.message);
    },
    suspense: true,
  });
};

export { useGetBaby };
