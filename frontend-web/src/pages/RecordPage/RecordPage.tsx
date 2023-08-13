import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useQueryClient } from '@tanstack/react-query';

import CalendarBar from '@/components/molecules/CalendarBar/CalendarBar';
import CategoryBar from '@/components/molecules/CategoryBar/CategoryBar';
import RecordContainer from '@/components/organisms/RecordContainer/RecordContainer';
import { PATH } from '@/constants/path';
import { selectedBabyState } from '@/states/babyState';
import { recordedValuesState } from '@/states/recordState';
import { useGetAllCategoryRecords } from '@/apis/Record/Queries/useGetAllCategoryRecords';
import {
  RecordTypeA,
  RecordTypeB,
  RecordTypeC,
  RecordedList,
} from '@/types/recordTypes';
import { selectedDateState } from '@/states/dateState';

type CombinedRecord =
  | (RecordTypeA & { category: string })
  | (RecordTypeB & { category: string })
  | (RecordTypeC & { category: string });

type RecordItem = RecordTypeA | RecordTypeB | RecordTypeC;
type StringKeys<T> = Extract<keyof T, string>;

const RecordPage = () => {
  // 날짜 데이터 형식 바꾸는 함수
  const formatDate = (date: Date) => moment(date).format('YYYY-MM-DD');
  const queryClient = useQueryClient();

  // 처음 화면에 들어왔을 때 날짜 설정, selectedDate로 리코일에 저장
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  // 처음 화면에 들어왔을 때 아이 id를 selectedBaby로 리코일에 저장
  const selectedBaby = useRecoilValue(selectedBabyState);

  // 저장된 아이 id랑 날짜로 get요청
  const recordedList = useGetAllCategoryRecords(
    selectedBaby.babyId,
    selectedDate
  );

  // combinedData를 state로 지정
  const [combinedData, setCombinedDataState] = useState<CombinedRecord[]>([]);

  // console.log(
  //   'baby',
  //   selectedBaby.babyId,
  //   '날짜',
  //   selectedDate,
  //   '--------',
  //   recordedList
  // );

  // const [recordedValues, setRecordedValues] = useSetRecoilState(recordedList);
  // 리코일에 rcordedList 저장
  // setRecordedValues(recordedList);

  useEffect(() => {
    const computeCombinedData = (recordedList: RecordedList) => {
      const tempCombinedData: CombinedRecord[] = [];
      Object.keys(recordedList).forEach(
        (key: StringKeys<typeof recordedList>) => {
          recordedList[key].forEach((item: RecordItem) => {
            tempCombinedData.push({ ...item, category: key });
          });
        }
      );

      tempCombinedData.sort((a, b) => {
        const timeA = a.createdTime || '00:00:00';
        const timeB = b.createdTime || '00:00:00';
        return timeA.localeCompare(timeB);
      });

      setCombinedDataState(tempCombinedData); // Set the state here
    };

    computeCombinedData(recordedList);
  }, [recordedList]);

  // const setRecordedValues = useSetRecoilState(recordedList);
  //const setRecordedValues = useSetRecoilState(recordedValuesState);

  // useEffect(() => {
  //   setRecordedValues(recordedList);
  //   console.log('recordedList', selectedDate, recordedList);
  // }, [selectedDate, recordedList, setRecordedValues]);

  useEffect(() => {
    // babyId 바뀔 때마다 쿼리 결과 무효화 -> 데이터 다시 불러오기
    queryClient.invalidateQueries(['record', selectedBaby.babyId]);
    // 날짜 바뀔 때마다 쿼리 결과 무효화 -> 데이터 다시 불러오기
    queryClient.invalidateQueries(['record', selectedDate]);
    // console.log('baby', selectedBaby.babyId, '날짜', selectedDate);
    console.log('get쿼리 다시 재실행됐는지?');

    // recordedList를 리코일에 저장하자
  }, [selectedBaby.babyId, selectedDate, queryClient]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(formatDate(date));
  };

  return (
    <>
      <section>
        <CalendarBar onDateChange={handleDateChange}></CalendarBar>
        <CategoryBar path={PATH.MAIN}></CategoryBar>
      </section>
      <div style={{ paddingTop: 'env(safe-area-inset-top)' }}>
        <RecordContainer combinedData={combinedData}></RecordContainer>
      </div>
    </>
  );
};

export default RecordPage;
