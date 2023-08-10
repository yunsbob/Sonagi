interface User {
  userId: number;
  name: string;
}

interface Baby {
  birthDate: string;
  gender: string;
  name: string;
  userId: number;
}

interface BabiesOfUser {
  babyId: number;
  name: string;
  gender: string;
}

// 가능한 모든 카테고리 목록
type Category =
  | 'All'
  | 'Meal'
  | 'Diaper'
  | 'Sleep'
  | 'Pump'
  | 'Activity'
  | 'Health'
  | 'Extra';

// 모든 카테고리에 대한 '상태'를 나타낸다
interface CategoryStateType {
  All: boolean;
  Meal: boolean;
  Diaper: boolean;
  Sleep: boolean;
  Pump: boolean;
  Activity: boolean;
  Health: boolean;
  Extra: boolean;
}

export type { User, Baby, BabiesOfUser, Category, CategoryStateType };
