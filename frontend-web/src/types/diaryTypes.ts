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

interface DiaryInfo {
  diaryId: number;
  userName: string;
  writeDay: string;
  imgUrls: string[];
  content: string;
}

export type { DiaryPutDto, DiaryPostDto, DiaryInfo };
