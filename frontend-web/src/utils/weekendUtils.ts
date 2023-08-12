import dayjs, { Dayjs } from 'dayjs';

const getWeekendWithDay = (
  selectedDate: Date
): Array<{ date: number; day: string }> => {
  const curDate: Dayjs = dayjs(selectedDate);
  const weekDatesWithDay: Array<{ date: number; day: string }> = [];

  for (let i = -3; i <= 3; i++) {
    const currentDate: Dayjs = curDate.add(i, 'day');
    const dateWithDay = {
      date: currentDate.date(),
      day: currentDate.format('dd'), // 'ddd'는 요일을 약식으로 표현하는 형식입니다.
    };
    weekDatesWithDay.push(dateWithDay);
  }

  return weekDatesWithDay;
};

export default getWeekendWithDay;
