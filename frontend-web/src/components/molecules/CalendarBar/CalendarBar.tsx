import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import { CalendarBarContainer } from '@/components/molecules/CalendarBar/CalendarBar.style';
import iconArrowMiniLeftGrey from '@/assets/images/icon-arrow-mini-left-grey.png';
import iconArrowMiniRightGrey from '@/assets/images/icon-arrow-mini-right-grey.png';
import { useState } from 'react';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import moment from 'moment';
import { CalendarModal } from '@/components/organisms/CalendarModal/CalendarModal';

const CalendarBar = () => {
  const today = new Date();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [pickDate, setPickDate] = useState<Date>(today);

  // calendar bar date click event
  const onClickCalendarBar = () => {
    setModalOpen(true);
  };

  // calendar modal day click event
  const onCalendarChange = (value: Value) => {
    if (value instanceof Date) {
      setPickDate(value);
    }
  };

  const onModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <CalendarModal
          pickDate={pickDate}
          onModalClose={onModalClose}
          onCalendarChange={onCalendarChange}
        />
      )}
      <CalendarBarContainer>
        <Image src={iconArrowMiniLeftGrey} width={1.3} height={1.3}></Image>
        <Text
          onClick={onClickCalendarBar}
          size="medium1"
          style={{ margin: '0px 10px' }}
        >
          {moment(pickDate).format('YYYY년 MM월 D일')}
        </Text>
        <Image src={iconArrowMiniRightGrey} width={1.3} height={1.3}></Image>
      </CalendarBarContainer>
    </>
  );
};

export default CalendarBar;
