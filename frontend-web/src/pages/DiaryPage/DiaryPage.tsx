import { Text } from '@/components/atoms/Text/Text.styles';
import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import { useState } from 'react';

const DiaryPage = () => {
  // 리코일에서 날짜 가져다 쓰기 !

  return (
    <>
      <CalendarBar></CalendarBar>
      <Text size="headXLarge">다이어리 페이지입니다</Text>
    </>
  );
};

export default DiaryPage;
