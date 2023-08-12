import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import { CalendarBarContainer } from '@/components/molecules/CalendarBar/CalendarBar.style';
import iconArrowMiniLeftGrey from '@/assets/images/icon-arrow-mini-left-grey.png';
import iconArrowMiniRightGrey from '@/assets/images/icon-arrow-mini-right-grey.png';
import { useEffect, useState } from 'react';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import moment from 'moment';
import { CalendarModal } from '@/components/organisms/CalendarModal/CalendarModal';
import dayjs from 'dayjs';

interface CalendarBarProps {
  onDateChange: (date: Date) => void; // 날짜를 인자로 받고 아무 것도 반환하지 않음
  selectedDate?: Date;
}

const CalendarBar: React.FC<CalendarBarProps> = ({
  onDateChange,
  selectedDate = new Date(),
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [pickDate, setPickDate] = useState<Date>(selectedDate);

  // selectedDate 감지 반영
  useEffect(() => {
    setPickDate(selectedDate);
  }, [selectedDate]);

  // calendar bar date click event
  const onClickCalendarBar = () => {
    setModalOpen(true);
  };

  // calendar modal day click event
  const onCalendarChange = (newDate: Value) => {
    if (newDate instanceof Date) {
      setPickDate(newDate);
      onDateChange(newDate); // 상위로 건네주기
    }
  };

  const onModalClose = () => {
    setModalOpen(false);
  };

  const onChangeDay = (days: number) => {
    const newDate = new Date(pickDate);
    newDate.setDate(newDate.getDate() + days);
    if (dayjs(newDate).isAfter(dayjs())) {
      return;
    }
    setPickDate(newDate);
    onDateChange(newDate); // 상위로 건네주기
  };

  return (
    <>
      <CalendarModal
        pickDate={pickDate}
        onModalClose={onModalClose}
        modalOpen={modalOpen}
        onCalendarChange={onCalendarChange}
      />

      <CalendarBarContainer>
        <Image
          src={iconArrowMiniLeftGrey}
          width={1.3}
          height={1.3}
          onClick={() => onChangeDay(-1)}
        />
        <Text
          onClick={onClickCalendarBar}
          size="medium1"
          style={{ margin: '0px 10px' }}
        >
          {moment(pickDate).format('YYYY년 M월 D일')}
        </Text>
        <Image
          src={iconArrowMiniRightGrey}
          width={1.3}
          height={1.3}
          onClick={() => onChangeDay(1)}
        />
      </CalendarBarContainer>
    </>
  );
};

export default CalendarBar;
