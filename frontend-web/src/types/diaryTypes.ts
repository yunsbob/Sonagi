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
  writedTime: string;
  imgUrls: string[];
  content: string;
}

export type { DiaryPutDto, DiaryPostDto, DiaryInfo };
