import { useMutation } from '@tanstack/react-query';
import { addDiary } from '@/apis/Diary/diaryAPI';

// 일기 등록
const useAddDiary = () => {
  return useMutation((formData: FormData) => addDiary(formData), {
    onSuccess: () => {},
    onError: (err: Error) => {
      console.log(err);
    },
  });
};

export { useAddDiary };
