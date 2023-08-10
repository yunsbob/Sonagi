import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import CategoryBar from '@/components/molecules/CategoryBar/CategoryBar';
import RecordContainer from '@/components/organisms/RecordContainer/RecordContainer';
import { PATH } from '@/constants/path';
import { useState } from 'react';
import { selectedBabyState } from '@/states/babyState';
import { useRecoilValue } from 'recoil';

const RecordPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selectedBaby = useRecoilValue(selectedBabyState);

  // TODO: 여기서 BabyId랑 Today 날짜 받아서 get
  // TODO: calandar에서 왼/오른쪽 날짜 넘기면 해당 날짜로 계속 get
  // 받은걸 recordedList이라는 변수로 리코일 저장, Container로 넘겨주기

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
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
