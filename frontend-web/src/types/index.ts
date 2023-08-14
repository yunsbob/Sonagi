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

interface UpdateBaby {
  birthDate: string;
  gender: 'M' | 'F';
  name: string;
  babyId: number;
}

interface BabiesOfUser {
  babyId: number;
  name: string;
  gender: 'M' | 'F';
  authority: string;
}

interface FAQ {
  faqId: number;
  title: string;
  content: string;
}

interface Question {
  questionId: number;
  createdAt: string;
  title: string;
  content: string;
  userId: number;
}

interface DeletedBaby {
  babyId: number;
  name: string;
  birthDate: string;
  gender: string;
  isDeleted: string;
  deletedAt: string;
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

type Record = {
  type: string;
  queryName: string;
  category: Category;
  color: string;
};

// 카테고리별 기록 종류 커스텀 타입
type RecordsByCategory = {
  [key in Category]?: Record[];
};

type RecordData = {
  recordType: string;
  time: string;
  color: string;
  category: Category;
};

interface CustomModal {
  onModalClose: () => void;
  modalOpen: boolean;
}

export type {
  User,
  Baby,
  BabiesOfUser,
  Category,
  CategoryStateType,
  Record,
  RecordsByCategory,
  RecordData,
  CustomModal,
  UpdateBaby,
  FAQ,
  Question,
  DeletedBaby,
};
