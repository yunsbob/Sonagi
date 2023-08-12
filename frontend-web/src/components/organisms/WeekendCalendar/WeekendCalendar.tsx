import React, { useEffect, useState } from 'react';
import WeekendCalendarToken from '../../molecules/WeekendCalendar/WeekendCalendarToken';
import getWeekendDate from '../../../utils/weekendUtils';
import WeekendCalendarContainer from './WeekendCalendar.styles';

interface WeekendCalendarProps {
  selectedDate: Date;
}
type StatusOfDay = 'beforeToday' | 'isToday' | 'afterToday';
const WeekendCalendar: React.FC<WeekendCalendarProps> = ({ selectedDate }) => {
  const [weekendDateList, setWeekendDateList] = useState<
    Array<{ date: number; day: string }>
  >([]);

  useEffect(() => {
    const calculatedWeekendDateList: Array<{ date: number; day: string }> =
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
          />
        ))}
      </WeekendCalendarContainer>
    </>
  );
};

export default WeekendCalendar;
