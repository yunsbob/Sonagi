import { DiaryInfo } from '@/types/diaryTypes';
import { atom } from 'recoil';

// 일기 기록 여부(date) 리스트 달력 체크용
export const writtenDiaryDateList = atom<string[]>({
  key: 'writtenDiaryDateList',
  default: [],
});

// 일기 기록 내용(DiaryInfo) 리스트 key:날짜 ,value:DiaryInfo[]
export const diaryRecordList = atom<DiaryInfo[]>({
  key: 'diaryRecordList',
  default: [],
});
