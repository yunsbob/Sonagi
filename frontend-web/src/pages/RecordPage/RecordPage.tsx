import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import CategoryBar from '@/components/molecules/CategoryBar/CategoryBar';
import RecordContainer from '@/components/organisms/RecordContainer/RecordContainer';
import { PATH } from '@/constants/path';
import { useEffect, useState } from 'react';
import { selectedBabyState } from '@/states/babyState';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import moment from 'moment';
import { useGetAllCategoryRecords } from '@/apis/Record/Queries/useGetAllCategoryRecords';
import { recordedValuesState } from '@/states/recordState';

const RecordPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selectedBaby = useRecoilValue(selectedBabyState);
  const currentDate = moment(selectedDate).format('YYYY-MM-DD');

  // API로 AllCategory의 records 받아옴
  const recordedList = useGetAllCategoryRecords(
    selectedBaby.babyId,
    currentDate
  );

  // 받아온 AllCategory Records 리코일에 저장
  const setRecordedValues = useSetRecoilState(recordedValuesState);

  useEffect(() => {
    setRecordedValues(recordedList);
  }, [recordedList, setRecordedValues]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <section>
        <CalendarBar onDateChange={handleDateChange}></CalendarBar>
        <CategoryBar path={PATH.MAIN}></CategoryBar>
      </section>
      <div style={{ paddingTop: 'env(safe-area-inset-top)' }}>
        <RecordContainer></RecordContainer>
      </div>
    </>
  );
};

export default RecordPage;
