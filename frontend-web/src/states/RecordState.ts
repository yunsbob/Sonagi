import { atom } from 'recoil';
import { Category } from '@/states/CategoryState';
import { RecordData } from '@/components/molecules/RecordBar/RecordBar';

type Record = {
  type: string;
  category: Category;
};

export const recordedValues = atom<RecordData[]>({
  key: 'recordBlocksState',
  default: [],
});

export const records: Record[] = [
  { type: '수유', category: 'Meal' },
  { type: '분유', category: 'Meal' },
  { type: '소변', category: 'Diaper' },
  { type: '대변', category: 'Diaper' },
  { type: '수면', category: 'Sleep' },
  { type: '유축', category: 'Pump' },
  { type: '유축 수유', category: 'Meal' },
  { type: '이유식', category: 'Meal' },
  { type: '체온', category: 'Health' },
  { type: '병원', category: 'Health' },
  { type: '투약', category: 'Health' },
  { type: '간식', category: 'Meal' },
  { type: '우유', category: 'Meal' },
  { type: '놀이', category: 'Activity' },
  { type: '터미 타임', category: 'Activity' },
  { type: '기타', category: 'Extra' },
];

// 카테고리별 기록 종류 커스텀 타입
type RecordsByCategory = {
  [key in Category]?: Record[];
};

export const recordsByCategory: RecordsByCategory = {
  All: records,
  Meal: records.filter(record => record.category === 'Meal'),
  Diaper: records.filter(record => record.category === 'Diaper'),
  Sleep: records.filter(record => record.category === 'Sleep'),
  Pump: records.filter(record => record.category === 'Pump'),
  Activity: records.filter(record => record.category === 'Activity'),
  Health: records.filter(record => record.category === 'Health'),
  Extra: records.filter(record => record.category === 'Extra'),
};
