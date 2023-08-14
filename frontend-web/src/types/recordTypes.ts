// category랑 color 일일이 다 지정해줘야할수도?

export const AllTypeValues = [
  'infantFormulas',
  'breastFeedings',
  'babyFoods',
  'milks',
  'pumpingBreasts',
  'pees',
  'poops',
  'hospitals',
  'medications',
  'snacks',
  'extras',
  'sleeps',
  'plays',
  'tummytimes',
  'feedings',
  'fevers',
];

export type RecordIdKeys =
  | 'mealId'
  | 'healthId'
  | 'pumpingBreastId'
  | 'diaperId'
  | 'healthId'
  | 'sleepId'
  | 'activityId'
  | 'extraId';

export type AllType = (typeof AllTypeValues)[number];

interface RecordCommon {
  id?: number;
  userId?: number;
  babyId?: number;
  createdDate?: string;
  createdTime?: string;
  memo: string;
}
// 수유
interface Feeding extends RecordCommon {
  leftStartTime: string;
  rightStartTime: string;
  leftEndTime: string;
  rightEndTime: string;
  mealId?: number;
}

// 체온
interface Fever extends RecordCommon {
  bodyTemperature: number;
  healthId?: number;
}

interface InfantFormula extends RecordCommon {
  amount: number;
  mealId?: number;
}
interface BreastFeeding extends RecordCommon {
  amount: number;
  mealId?: number;
}
interface BabyFood extends RecordCommon {
  amount: number;
  mealId?: number;
}
interface Milk extends RecordCommon {
  amount: number;
  mealId?: number;
}

interface PumpingBreast extends RecordCommon {
  amount: number;
  pumpingBreastId?: number;
}
// 유축 (개별 카테고리 있음)

interface Pee extends RecordCommon {
  diaperId?: number;
}
interface Poop extends RecordCommon {
  diaperId?: number;
}
interface Hospital extends RecordCommon {
  healthId?: number;
}
interface Medication extends RecordCommon {
  healthId?: number;
}
interface Snack extends RecordCommon {
  mealId?: number;
}
interface Extra extends RecordCommon {
  extraId?: number;
}

interface Sleep extends RecordCommon {
  endTime: string;
  sleepId?: number;
}
interface Play extends RecordCommon {
  endTime: string;
  activityId?: number;
}
interface Tummytime extends RecordCommon {
  endTime: string;
  activityId?: number;
}

type RecordedValues = {
  [key in AllType]: AllRecords[];
};

type AllRecords =
  | Play
  | Tummytime
  | Pee
  | Poop
  | Fever
  | Medication
  | Hospital
  | BabyFood
  | BreastFeeding
  | Feeding
  | InfantFormula
  | Milk
  | Snack
  | PumpingBreast
  | Sleep
  | Extra;

type CombinedRecord = AllRecords & { category: string };

export type {
  AllRecords,
  Feeding,
  Fever,
  InfantFormula,
  BreastFeeding,
  BabyFood,
  Milk,
  PumpingBreast,
  Pee,
  Poop,
  Hospital,
  Medication,
  Snack,
  Extra,
  Sleep,
  Play,
  Tummytime,
  RecordedValues,
  CombinedRecord,
};
