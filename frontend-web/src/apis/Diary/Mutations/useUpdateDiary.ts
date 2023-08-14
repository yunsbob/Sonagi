import { updateDiary } from '@/apis/Diary/diaryAPI';
import { useMutation } from '@tanstack/react-query';

// 일기 수정
const useUpdateDiary = () => {
  return useMutation((formData: FormData) => updateDiary(formData), {
    onSuccess: () => {},
    onError: (err: Error) => {
      console.log(err);
    },
  });
};

export { useUpdateDiary };
