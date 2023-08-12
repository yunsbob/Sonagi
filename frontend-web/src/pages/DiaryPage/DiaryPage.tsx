import { Text } from '@/components/atoms/Text/Text.styles';
import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import { useEffect, useState } from 'react';
import WeekendCalendarToken from '../../components/molecules/WeekendCalendar/WeekendCalendarToken';
import { dateState } from '../../states/calendarState';
import WeekendCalendar from '../../components/organisms/WeekendCalendar/WeekendCalendar';

const DiaryPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <CalendarBar
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      ></CalendarBar>
      <WeekendCalendar
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      ></WeekendCalendar>
    </>
  );
};

export default DiaryPage;
