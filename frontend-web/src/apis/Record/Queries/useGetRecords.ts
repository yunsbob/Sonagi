import { useQuery } from '@tanstack/react-query';
import { instance } from '@/apis/instance';

interface RecordResponse {
  // 인터페이스 이름 ?
  babyId: number;
  period: string;
  date: string;
}

export function useRecord(recordId: string) {
  // return useQuery<RecordResponse, Error>();
  // ['record', recordId], // unique key - [캐시 그룹 이름, 고유 식별자]
  // () => instance.get(`/record/${recordId}`) // promise 반환 함수 (실제 API 호출)
  // 여기 경로?에 어떻게 넣을 수 있찌???
}
