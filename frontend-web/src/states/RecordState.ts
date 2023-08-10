import { atom } from 'recoil';
import { Record, RecordData, RecordsByCategory } from '@/types';
import { categoryToColorMap } from '@/constants/categoryToColorMap';
import theme from '@/styles/theme';
import { RecordedValues } from '@/types/recordTypes';

export const recordedValuesState = atom<RecordedValues>({
  key: 'recordedValues',
  default: {
    plays: [],
    tummytimes: [],
    pees: [],
    poops: [],
    fevers: [],
    medications: [],
    hospitals: [],
    babyFoods: [],
    breastFeedings: [],
    feedings: [],
    infantFormulas: [],
    milks: [],
    snacks: [],
    pumpingBreasts: [],
    sleeps: [],
    extras: [],
  },
});

export const recordedValues = atom<RecordData[]>({
  key: 'recordBlocksState',
  default: [],
});

export const records: Record[] = [
  {
    type: '수유',
    category: 'Meal',
    color: theme.color[categoryToColorMap['Meal']],
  },
  {
    type: '분유',
    category: 'Meal',
    color: theme.color[categoryToColorMap['Meal']],
  },
  {
    type: '소변',
    category: 'Diaper',
    color: theme.color[categoryToColorMap['Diaper']],
  },
  {
    type: '대변',
    category: 'Diaper',
    color: theme.color[categoryToColorMap['Diaper']],
  },
  {
    type: '수면',
    category: 'Sleep',
    color: theme.color[categoryToColorMap['Sleep']],
  },
  {
    type: '유축',
    category: 'Pump',
    color: theme.color[categoryToColorMap['Pump']],
  },
  {
    type: '유축 수유',
    category: 'Meal',
    color: theme.color[categoryToColorMap['Meal']],
  },
  {
    type: '이유식',
    category: 'Meal',
    color: theme.color[categoryToColorMap['Meal']],
  },
  {
    type: '체온',
    category: 'Health',
    color: theme.color[categoryToColorMap['Health']],
  },
  {
    type: '병원',
    category: 'Health',
    color: theme.color[categoryToColorMap['Health']],
  },
  {
    type: '투약',
    category: 'Health',
    color: theme.color[categoryToColorMap['Health']],
  },
  {
    type: '간식',
    category: 'Meal',
    color: theme.color[categoryToColorMap['Meal']],
  },
  {
    type: '우유',
    category: 'Meal',
    color: theme.color[categoryToColorMap['Meal']],
  },
  {
    type: '놀이',
    category: 'Activity',
    color: theme.color[categoryToColorMap['Activity']],
  },
  {
    type: '터미 타임',
    category: 'Activity',
    color: theme.color[categoryToColorMap['Activity']],
  },
  {
    type: '기타',
    category: 'Extra',
    color: theme.color[categoryToColorMap['Extra']],
  },
];

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
