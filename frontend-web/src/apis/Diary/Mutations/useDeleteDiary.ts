import { deleteDiary } from '@/apis/Diary/diaryAPI';
import { useMutation } from '@tanstack/react-query';

// 일기 삭제
const useDeleteDiary = () => {
  return useMutation((diaryId: number) => deleteDiary(diaryId), {
    onSuccess: () => {},
    onError: (err: Error) => {
      console.log(err);
    },
  });
};

export { useDeleteDiary };
