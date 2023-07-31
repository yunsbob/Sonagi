import { Category } from '@/states/CategoryState';

type RecordType = string;

// 카테고리별 기록 종류
type RecordsByCategory = {
  [key in Category]?: RecordType[];
};

export const recordsByCategory: RecordsByCategory = {
  All: [
    '수유',
    '분유',
    '수면',
    '소변',
    '대변',
    '유축',
    '유축 수유',
    '이유식',
    '체온',
    '병원',
    '투약',
    '예방 접종',
    '간식',
    '우유',
    '놀이',
    '터미 타임',
    '기타',
  ],
  Meal: ['수유', '분유', '유축 수유', '이유식', '간식', '우유'],
  Diaper: ['소변', '대변'],
  Sleep: [],
};
