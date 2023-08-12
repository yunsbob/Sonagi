import { Text } from '@/components/atoms/Text/Text.styles';
import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import { useState } from 'react';
import WeekendCalendarToken from '../../components/molecules/WeekendCalendar/WeekendCalendarToken';
import { dateState } from '../../states/calendarState';
import WeekendCalendar from '../../components/organisms/WeekendCalendar/WeekendCalendar';

const DiaryPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <CalendarBar onDateChange={handleDateChange}></CalendarBar>
      <WeekendCalendar selectedDate={selectedDate}></WeekendCalendar>
    </>
  );
};

export default DiaryPage;
