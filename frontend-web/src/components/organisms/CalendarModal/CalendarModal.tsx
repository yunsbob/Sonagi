import Modal from '@/components/organisms/Modal/Modal';
import moment from 'moment';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import '@/components/organisms/CalendarModal/Calendar.css';

interface CalendarModalProps {
  onModalClose: () => void;
  pickDate: Date;
  onCalendarChange: (value: Value) => void;
}

const CalendarModal = ({
  onModalClose,
  pickDate,
  onCalendarChange,
}: CalendarModalProps) => {
  //   const onClickDate = (e: any) => {
  //     setModalOpen(true);
  //   };

  //   const onCalendarChange = (value: Value) => {
  //     if (value instanceof Date) {
  //       setPickDate(value);
  //     }
  //   };

  //   const onModalClose = () => {
  //     setModalOpen(false);
  //   };

  return (
    <Modal height={22} onClose={onModalClose}>
      <Calendar
        onClickDay={onModalClose}
        formatDay={(_, date) => moment(date).format('D')}
        minDetail="month" // display only 'Month' unit at navigation
        maxDetail="month" // display only 'Month' unit at navigation
        className="mx-auto w-full text-sm border-b"
        onChange={onCalendarChange}
        value={pickDate}
      />
    </Modal>
  );
};

export { CalendarModal };
