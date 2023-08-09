interface User {
  id: number;
  name: string;
}

interface Baby {
  birthDate: string;
  gender: string;
  name: string;
  userId: number;
}

// TODO: 백엔드에게 BabyDatas에 성별 요청하기
interface BabiesOfUser {
  babyId: number;
  name: string;
}

export type { User, Baby, BabiesOfUser };
