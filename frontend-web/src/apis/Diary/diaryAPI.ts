import { instance } from '@/apis/instance';
import { DiaryPostDto } from '@/types/diaryTypes';

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
const addDiary = async (diaryPostDto: DiaryPostDto, fileList: File[]) => {
  const formData = new FormData();
  formData.append('diaryPostDto', JSON.stringify(diaryPostDto)); // DiaryPostDto를 JSON 문자열로 추가
  fileList.forEach((file, index) => {
    formData.append(`files[${index}]`, file); // 파일 리스트 추가
  });
  try {
    await instance.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // 특정 요청에서만 변경
      },
    });
  } catch {
    new Error('baby info add error');
  }
};
// 일기 수정
// const updateDiary = async ()
// 일기 삭제
const deleteDiary = async (diaryId: number) => {
  try {
    await instance.delete(`/${diaryId}`);
  } catch {
    new Error('Delete Diary error');
  }
};

// 일기 기록 날짜 리스트 조회

export { getDiariesAtWriteDay };
