import { atom, selector, selectorFamily } from 'recoil';
import { PATH } from '@/constants/path';
// 카테고리 타입 선언 => 가능한 모든 카테고리 목록을 나타낸다
export type Category =
  | 'All'
  | 'Meal'
  | 'Diaper'
  | 'Sleep'
  | 'Pump'
  | 'Activity'
  | 'Health'
  | 'Extra';

// CategoryStateType 인터페이스를 선언하여 모든 카테고리에 대한 '상태'를 나타낸다
export interface CategoryStateType {
  All: boolean;
  Meal: boolean;
  Diaper: boolean;
  Sleep: boolean;
  Pump: boolean;
  Activity: boolean;
  Health: boolean;
  Extra: boolean;
}

const CategoryStateDefault = {
  All: true,
  Meal: false,
  Diaper: false,
  Sleep: false,
  Pump: false,
  Activity: false,
  Health: false,
  Extra: false,
};
// Recoil atom을 사용하여 CategoryState를 선언
// <CategoryStateType> 이라고 쓰는 것은 atom이라는 함수에 CategoryStateType 타입의 인자를 주겠다는 것을 의미
// = 타입 정보를 동적으로 설정할 수 있게 해주는 제너릭 문법
export const RecordCategoryState = atom<Category>({
  key: 'RecordCategoryState',
  default: 'All',
});

export const GraphCategoryState = atom<Category>({
  key: 'GraphCategoryState',
  default: 'Meal',
});

//
export const selectedCategoryState = selectorFamily<Category, string>({
  key: 'selectedCategoryState',
  get:
    (path: string) =>
    ({ get }) => {
      let state;
      switch (path) {
        case PATH.MAIN:
          state = RecordCategoryState;
          break;
        case PATH.GRAPH:
          state = GraphCategoryState;
          break;
      }
      if (state) {
        return get(state);
      } else {
        return 'All';
      }
    },
  set:
    (path: string) =>
    ({ set }, value) => {
      let state;
      switch (path) {
        case PATH.MAIN:
          state = RecordCategoryState;
          break;
        case PATH.GRAPH:
          state = GraphCategoryState;
          break;
      }
      if (state) {
        set(state, value);
      }
    },
});
