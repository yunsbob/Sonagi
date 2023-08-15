import React, { useEffect, useState } from 'react';
import WeekendCalendarToken from '../../molecules/WeekendCalendar/WeekendCalendarToken';
import getWeekendDate from '../../../utils/weekendUtils';
import WeekendCalendarContainer from './WeekendCalendar.styles';
import dayjs, { Dayjs } from 'dayjs';
import { useRecoilState } from 'recoil';
import { selectedDateState } from '@/states/dateState';
import { formatDate } from '@/utils/formatDate';

//TODO: isRecoredDay 데이터 바인딩 이후 처리용 함수 제작.

const WeekendCalendar = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [weekendDateList, setWeekendDateList] = useState<
    Array<{ date: Dayjs; day: string }>
  >([]);

  useEffect(() => {
    setWeekendDateList(getWeekendDate(new Date(selectedDate)));
  }, [selectedDate]);

  const jStatusOfDay = (newDate: Dayjs): string => {
    if (newDate.isSame(dayjs(selectedDate))) {
      return 'isToday';
    }
    if (newDate.isAfter(dayjs())) {
      return 'afterToday';
    }
    return 'beforeToday';
  };
  const handleChangeDay = (date: Date) => {
    const newDate = new Date();
    newDate.setHours(0, 0, 0, 0);
    if (dayjs(date).isAfter(newDate)) {
      return;
    }
    setSelectedDate(formatDate(date));
  };
  return (
    <>
      <WeekendCalendarContainer>
        {weekendDateList.map((dateMap, index) => (
          <WeekendCalendarToken
            key={index}
            dayNumber={dateMap['date']}
            dayOfWeek={dateMap['day']}
            $statusOfDay={jStatusOfDay(dateMap['date'])}
            $isRecordedDate={true}
            onClick={() => handleChangeDay(dateMap['date'].toDate())}
          />
        ))}
      </WeekendCalendarContainer>
    </>
  );
};

export default WeekendCalendar;
