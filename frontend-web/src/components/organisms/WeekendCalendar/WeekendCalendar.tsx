import React, { useEffect, useState } from 'react';
import WeekendCalendarToken from '../../molecules/WeekendCalendar/WeekendCalendarToken';
import getWeekendDate from '../../../utils/weekendUtils';
import WeekendCalendarContainer from './WeekendCalendar.styles';
import { Dayjs } from 'dayjs';

//TODO: isRecoredDay 데이터 바인딩 이후 처리용 함수 제작.

interface WeekendCalendarProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

type StatusOfDay = 'beforeToday' | 'isToday' | 'afterToday';

const WeekendCalendar: React.FC<WeekendCalendarProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const [weekendDateList, setWeekendDateList] = useState<
    Array<{ date: Dayjs; day: string }>
  >([]);

  useEffect(() => {
    const calculatedWeekendDateList: Array<{ date: Dayjs; day: string }> =
      getWeekendDate(selectedDate);
    setWeekendDateList(calculatedWeekendDateList);
  }, [selectedDate]);

  const jStatusOfDay: StatusOfDay[] = [
    'beforeToday',
    'beforeToday',
    'beforeToday',
    'isToday',
    'afterToday',
    'afterToday',
    'afterToday',
  ];
  return (
    <>
      <WeekendCalendarContainer>
        {weekendDateList.map((dateMap, index) => (
          <WeekendCalendarToken
            key={index}
            dayNumber={dateMap['date']}
            dayOfWeek={dateMap['day']}
            statusOfDay={jStatusOfDay[index]}
            isRecoredDay={true}
            onClick={() => onDateChange(dateMap['date'].toDate())} // 클릭 핸들러 추가
          />
        ))}
      </WeekendCalendarContainer>
    </>
  );
};

export default WeekendCalendar;
