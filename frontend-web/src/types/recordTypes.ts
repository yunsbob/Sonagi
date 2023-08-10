// category랑 color 일일이 다 지정해줘야할수도?

// 수유
interface Feeding {
  id: number;
  leftStartTime: string;
  rightStartTime: string;
  leftEndTime: string;
  rightEndTime: string;
  memo: string;
}

// 체온
interface Fever {
  id: number;
  createdTime: string;
  bodyTemperature: number;
  memo: string;
}

// recordTypeA : id + 기록시간 + 용량 + 메모
// => 분유(InfantFormula), 유축(BreastFeeding), 이유식(BabyFood), 우유(Milk), 유축(PumpingBreast)
interface RecordTypeA {
  id: number;
  amount: number;
  memo: string;
  createdTime: string;
}

interface InfantFormula extends RecordTypeA {}
interface BreastFeeding extends RecordTypeA {}
interface BabyFood extends RecordTypeA {}
interface Milk extends RecordTypeA {}
interface PumpingBreast extends RecordTypeA {}

// recordTypeB : id + 기록시간 + 메모
// => 소변(Pee), 대변(Poop), 병원(Hospital), 투약(Medication), 간식(Snack), 기타(Extra)
interface RecordTypeB {
  id: number;
  createdTime: string;
  memo: string;
}

interface Pee extends RecordTypeB {}
interface Poop extends RecordTypeB {}
interface Hospital extends RecordTypeB {}
interface Medication extends RecordTypeB {}
interface Snack extends RecordTypeB {}
interface Extra extends RecordTypeB {}

// recordTypeC : id + 기록시간 + 종료시간 + 메모
// => 수면(Sleep), 놀이(Play), 터미타임(TummyTime)
interface RecordTypeC {
  id: number;
  createdTime: string;
  endTime: string;
  memo: string;
}

interface Sleep extends RecordTypeC {}
interface Play extends RecordTypeC {}
interface TummyTime extends RecordTypeC {}

// AllCategory에서 받은 데이터 저장용 - 모든 기록들을 포함하는 타입
interface RecordedValues {
  plays: Play[];
  tummytimes: TummyTime[];
  pees: Pee[];
  poops: Poop[];
  fevers: Fever[];
  medications: Medication[];
  hospitals: Hospital[];
  babyFoods: BabyFood[];
  breastFeedings: BreastFeeding[];
  feedings: Feeding[];
  infantFormulas: InfantFormula[];
  milks: Milk[];
  snacks: Snack[];
  pumpingBreasts: PumpingBreast[];
  sleeps: Sleep[];
  extras: Extra[];
}

export type {
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
  TummyTime,
  RecordedValues,
};
