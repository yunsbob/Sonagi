import { instance } from '@/apis/instance';
import { DiaryPostDto } from '@/types/diaryTypes';

// 일기 기록 전부 조회
const getAllDiariesRecord = async (babyId: number) => {
  try {
    const response = await instance.get('/diaries/dates');
    return response.data;
  } catch {
    new Error('no data returned from the API - DiariesAtWriteDay');
  }
};

// 날짜 별 일기 조회
const getDiariesAtWriteDay = async (babyId: number, writeDay: string) => {
  try {
    const response = await instance.get(
      `/diaries?babyId=${babyId}&writeDay=${writeDay}`
    );
    return response.data;
  } catch {
    new Error('no data returned from the API - DiariesAtWriteDay');
  }
};

// 일기 등록
const addDiary = async (formData: FormData) => {
  try {
    await instance.post('/diaries', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // 특정 요청에서만 변경
      },
    });
  } catch {
    new Error('Diary Register Error');
  }
};
// 일기 수정
const updateDiary = async (formData: FormData) => {
  try {
    await instance.put('/diaries', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // 특정 요청에서만 변경
      },
    });
  } catch {
    new Error('Diary Update Error');
  }
};
// 일기 삭제
const deleteDiary = async (diaryId: number) => {
  try {
    await instance.delete(`/${diaryId}`);
  } catch {
    new Error('Delete Diary error');
  }
};

export {
  getDiariesAtWriteDay,
  addDiary,
  updateDiary,
  deleteDiary,
  getAllDiariesRecord,
};
