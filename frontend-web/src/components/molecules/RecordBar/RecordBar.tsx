import React, { useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import moment from 'moment';
import { RecordBarContainer } from '@/components/molecules/RecordBar/RecordBar.styles';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedCategoryState } from '@/states/categoryState';
import { Category, RecordData } from '@/types';
import { recordedValues, recordsByCategory } from '@/states/recordState';
import { Text } from '@/components/atoms/Text/Text.styles';
import { PATH } from '@/constants/path';
import { useAddRecordTypeA } from '@/apis/Record/Mutations/useAddRecordTypeA';
import { useAddRecordTypeB } from '@/apis/Record/Mutations/useAddRecordTypeB';
import { useAddRecordTypeC } from '@/apis/Record/Mutations/useAddRecordTypeC';
import { useAddRecordFeeding } from '@/apis/Record/Mutations/useAddRecordFeeding';
import { useAddRecordFever } from '@/apis/Record/Mutations/useAddRecordFever';
import { userInfoState } from '@/states/userState';
import { selectedBabyState } from '@/states/babyState';
import { recordedValuesState } from '../../../states/recordState';
import { selectedDateState } from '@/states/dateState';

import {
  TypeAValues,
  TypeA,
  TypeBValues,
  TypeB,
  TypeCValues,
  TypeC,
  RecordedValues,
} from '@/types/recordTypes';

interface RecordBarProps {
  onRecordUpdated: () => void;
}

// block에 뿌릴 용도로 시간 포맷 정의
const getCurrentTime = () => {
  const date = new Date();
  return `${String(date.getHours()).padStart(2, '0')}:${String(
    date.getMinutes()
  ).padStart(2, '0')}`;
};

const RecordBar: React.FC<RecordBarProps> = ({ onRecordUpdated }) => {
  const [recordedValues, setRecordedValues] =
    useRecoilState(recordedValuesState);

  // API 요청의 결과를 받아서 recordedValuesState를 업데이트하는 함수
  const updateRecordedValues = (type: keyof RecordedValues, data: any) => {
    setRecordedValues(prevState => ({
      ...prevState,
      [type]: [...prevState[type], data],
    }));
  };
  // const [recordedValue, setRecordedValue] =
  //   useSetRecoilState(recordedValuesState);
  const [pickDate, setPickTime] = useState(new Date());

  const nowDate = moment(pickDate).format('YYYY-MM-DD');

  // const [recordBlocks, setRecordBlocks] =
  //   useRecoilState<RecordData[]>(recordedValues);
  // console.log(recordBlocks, '리코일에 어떻게 저장되어있는지?');

  const currentCategory = useRecoilValue(selectedCategoryState(PATH.MAIN));
  const selectedDate = useRecoilValue(selectedDateState);

  const records = recordsByCategory[currentCategory || 'All'] || [];
  const [userInfo] = useRecoilState(userInfoState);
  const [selectedBaby] = useRecoilState(selectedBabyState);

  // 버튼 누르면 post
  const addRecordTypeAMutation = useAddRecordTypeA();
  const addRecordTypeBMutation = useAddRecordTypeB();
  const addRecordTypeCMutation = useAddRecordTypeC();
  const addRecordFeeding = useAddRecordFeeding();
  const addRecordFever = useAddRecordFever();

  const isTypeA = (query: string): query is TypeA =>
    TypeAValues.includes(query as TypeA);

  const isTypeB = (query: string): query is TypeB =>
    TypeBValues.includes(query as TypeB);

  const isTypeC = (query: string): query is TypeC =>
    TypeCValues.includes(query as TypeC);

  const handleButtonClick = (
    recordType: string,
    color: string,
    category: Category,
    queryName: string
  ) => {
    setPickTime(new Date());

    const nowTime = moment(pickDate).format('HH:mm:ss');
    const nowDate = selectedDate;
    console.log(nowDate, nowTime, queryName, recordType); // ex. medications, 투약
    if (isTypeA(queryName)) {
      addRecordTypeAMutation.mutate({
        type: queryName,
        userId: userInfo.userId,
        babyId: selectedBaby.babyId,
        amount: 0,
        createdTime: nowTime,
        createdDate: nowDate,
        memo: '',
      });
    } else if (isTypeB(queryName)) {
      addRecordTypeBMutation.mutate({
        type: queryName,
        userId: userInfo.userId,
        babyId: selectedBaby.babyId,
        createdTime: nowTime,
        createdDate: nowDate,
        memo: '',
      });
    } else if (isTypeC(queryName)) {
      addRecordTypeCMutation.mutate({
        type: queryName,
        userId: userInfo.userId,
        babyId: selectedBaby.babyId,
        createdTime: nowTime,
        createdDate: nowDate,
        endTime: nowTime,
        memo: '',
      });
    } else if (queryName === 'feedings') {
      addRecordFeeding.mutate({
        type: queryName,
        userId: userInfo.userId,
        babyId: selectedBaby.babyId,
        leftStartTime: nowTime,
        rightStartTime: nowTime,
        leftEndTime: nowTime,
        rightEndTime: nowTime,
        createdDate: nowDate,
        createdTime: nowTime,
        memo: '',
      });
    } else {
      console.log(
        'here0.',
        queryName,
        userInfo.userId,
        selectedBaby.babyId,
        nowTime,
        nowDate
      );
      addRecordFever.mutate({
        type: queryName,
        userId: userInfo.userId,
        babyId: selectedBaby.babyId,
        createdTime: nowTime,
        createdDate: nowDate,
        bodyTemperature: 36.5,
        memo: '',
      });
    }

    const time = getCurrentTime();
    // setRecordBlocks(prev => [...prev, { recordType, time, color, category }]);
    // console.log(recordBlocks, 'here');
    onRecordUpdated();
  };

  return (
    <RecordBarContainer>
      {records.map((record, idx) => (
        <Button
          option="default"
          size="xSmall"
          key={idx}
          $borderColor={record.color}
          onClick={() =>
            handleButtonClick(
              record.type,
              record.color,
              record.category,
              record.queryName
            )
          }
        >
          <Text size="medium3">{record.type}</Text>
        </Button>
      ))}
    </RecordBarContainer>
  );
};

export default RecordBar;
