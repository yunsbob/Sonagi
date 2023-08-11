interface DiaryPutDto {
  diaryId: number;
  content: string;
  removesFiles: string[];
}
interface DiaryPostDto {
  userId: number;
  babyId: number;
  content: string;
}

export type { DiaryPutDto };
