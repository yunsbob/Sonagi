import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import CategoryBar from '@/components/molecules/CategoryBar/CategoryBar';
import RecordContainer from '@/components/organisms/RecordContainer/RecordContainer';
import { PATH } from '@/constants/path';
import { useState } from 'react';

const RecordPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setCurrentDate(date);
  };

  return (
    <>
      <section>
        <CalendarBar onDateChange={handleDateChange}></CalendarBar>
        {/* 캘린더바에서 날짜를 변경하면... */}
        <CategoryBar path={PATH.MAIN}></CategoryBar>
      </section>
      <div style={{ paddingTop: 'env(safe-area-inset-top)' }}>
        {/* RecordContainer에서 뿌릴 예정 */}
        <RecordContainer></RecordContainer>
      </div>
    </>
  );
};

export default RecordPage;
