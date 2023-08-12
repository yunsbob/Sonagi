import React from 'react';
import { Text } from '@/components/atoms/Text/Text.styles';
import * as S from './WeekendCalendarToken.style';
import theme from '@/styles/theme';

//TODO:  isRecordDay true => 점찍기

interface WeekendCalendarProps {
  dayNumber: number;
  dayOfWeek: string;
  statusOfDay: 'beforeToday' | 'isToday' | 'afterToday';
  isRecoredDay?: boolean;
}

const WeekendCalendarToken = ({
  dayNumber,
  dayOfWeek,
  statusOfDay,
  isRecoredDay = false,
}: WeekendCalendarProps) => {
  const colorMap = {
    beforeToday: 'black',
    isToday: theme.color.calendarTodayFont,
    afterToday: theme.color.calendarBeforeFont,
  };

  return (
    <>
      <S.TokenWrapper statusOfDay={statusOfDay}>
        <S.floatingPoint>ㆍ</S.floatingPoint>
        <Text size="large" color={colorMap[statusOfDay]} $fontWeight={900}>
          {dayNumber}
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
