import { DiaryInfo } from '@/types/diaryTypes';
import { atom } from 'recoil';

// 일기 기록 여부(date) 리스트
export const writtenDiaryDateList = atom<string[]>({
  key: 'writtenDiaryDateList',
  default: [],
});

// 일기 기록 내용(DiaryInfo) 리스트

export const diaryRecordList = atom<DiaryInfo[]>({
  key: 'diaryRecordList',
  default: [],
});
