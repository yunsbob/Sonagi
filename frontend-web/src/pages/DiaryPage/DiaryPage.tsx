import { Text } from '@/components/atoms/Text/Text.styles';
import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import { useState } from 'react';

const DiaryPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <CalendarBar onDateChange={handleDateChange}></CalendarBar>
      <Text size="headXLarge">다이어리 페이지입니다</Text>
    </>
  );
};

export default DiaryPage;
