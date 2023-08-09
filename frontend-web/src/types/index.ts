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

// TODO: 백엔드에게 BabyInfos에 성별 요청하기 머라..머라고 이름짓지...
interface BabyInfoForBar {
  babyId: number;
  name: string;
}

export type { User, Baby, BabyInfoForBar };
