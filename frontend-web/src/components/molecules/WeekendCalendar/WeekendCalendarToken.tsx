import React from 'react';
import { Text } from '@/components/atoms/Text/Text.styles';
import * as S from './WeekendCalendarToken.style';
import theme from '@/styles/theme';
import { Dayjs } from 'dayjs';

//TODO:  isRecordDay true => 점찍기

interface WeekendCalendarProps {
  dayNumber: Dayjs;
  dayOfWeek: string;
  statusOfDay: 'beforeToday' | 'isToday' | 'afterToday';
  isRecoredDay?: boolean;
  onClick: () => void;
}

const WeekendCalendarToken = ({
  dayNumber,
  dayOfWeek,
  statusOfDay,
  isRecoredDay = false,
  onClick,
}: WeekendCalendarProps) => {
  const colorMap = {
    beforeToday: 'black',
    isToday: theme.color.calendarTodayFont,
    afterToday: theme.color.calendarBeforeFont,
  };

  return (
    <>
      <S.TokenWrapper statusOfDay={statusOfDay} onClick={onClick}>
        <S.FloatingPoint isRecorded={isRecoredDay}>ㆍ</S.FloatingPoint>
        <Text size="large" color={colorMap[statusOfDay]} $fontWeight={900}>
          {dayNumber.date()}
        </Text>
        <Text
          size="medium3"
          color={
            statusOfDay === 'beforeToday' ? 'black' : colorMap[statusOfDay]
          }
          $fontWeight={500}
        >
          {dayOfWeek}
        </Text>
      </S.TokenWrapper>
    </>
  );
};

export default WeekendCalendarToken;
