import { Text } from '@/components/atoms/Text/Text.styles';
import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import { useEffect, useState } from 'react';
import WeekendCalendarToken from '../../components/molecules/WeekendCalendar/WeekendCalendarToken';
import { dateState } from '../../states/calendarState';
import WeekendCalendar from '../../components/organisms/WeekendCalendar/WeekendCalendar';
import btnAddDiary from '@/assets/images/btn-add-diary.png';
import { DiaryListContainer } from '@/pages/DiaryPage/DiaryPage.styles';
import { Image } from '@/components/atoms/Image/Image';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

const DiaryPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date) => {
    if (dayjs(date).isAfter(dayjs())) {
      return;
    }
    setSelectedDate(date);
  };
  // router regist
  const navigate = useNavigate();

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
      <DiaryListContainer onClick={() => navigate(PATH.DIARYREGISTER)}>
        <Image src={btnAddDiary} width={100} $unit="%"></Image>
      </DiaryListContainer>
    </>
  );
};

export default DiaryPage;
