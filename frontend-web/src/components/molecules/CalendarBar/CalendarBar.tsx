import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import { CalendarBarContainer } from '@/components/molecules/CalendarBar/CalendarBar.style';
import iconArrowMiniLeftGrey from '@/assets/images/icon-arrow-mini-left-grey.png';
import iconArrowMiniRightGrey from '@/assets/images/icon-arrow-mini-right-grey.png';
import { useState } from 'react';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import moment from 'moment';
import { CalendarModal } from '@/components/organisms/CalendarModal/CalendarModal';
import { selectedDateState } from '@/states/dateState';
import { useRecoilState } from 'recoil';
import { formatDate } from '@/utils/formatDate';

// interface CalendarBarProps {
//   onDateChange: (date: Date) => void; // 날짜를 인자로 받고 아무 것도 반환하지 않음
// }

const CalendarBar: React.FC = () => {
  const today = new Date();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  // pickDate는 화면에 뿌리기용, selectedDate는 리코일에 저장해서 API 호출 등에 쓰이는 용
  const [pickDate, setPickDate] = useState<Date>(today);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  // calendar bar date click event
  const onClickCalendarBar = () => {
    setModalOpen(true);
  };

  // calendar modal day click event
  const onCalendarChange = (newDate: Value) => {
    if (newDate instanceof Date) {
      setPickDate(newDate);
      setSelectedDate(formatDate(newDate));
    }
  };

  const onModalClose = () => {
    setModalOpen(false);
  };

  const onChangeDay = (days: number) => {
    const newDate = new Date(pickDate);
    newDate.setDate(newDate.getDate() + days);
    setPickDate(newDate);
    setSelectedDate(formatDate(newDate));
    console.log('onChangeDay', selectedDate, '날짜 바꼈니?');
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
