import React, { useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import moment from 'moment';
import { RecordBarContainer } from '@/components/molecules/RecordBar/RecordBar.styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedCategoryState } from '@/states/categoryState';
import { Category } from '@/types';
import { recordsByCategory } from '@/states/recordState';
import { Text } from '@/components/atoms/Text/Text.styles';
import { PATH } from '@/constants/path';
import { useAddRecordTypeA } from '@/apis/Record/Mutations/useAddRecordTypeA';
import { useAddRecordTypeB } from '@/apis/Record/Mutations/useAddRecordTypeB';
import { useAddRecordTypeC } from '@/apis/Record/Mutations/useAddRecordTypeC';
import { useAddRecordFeeding } from '@/apis/Record/Mutations/useAddRecordFeeding';
import { useAddRecordFever } from '@/apis/Record/Mutations/useAddRecordFever';
import { userInfoState } from '@/states/userState';
import { selectedBabyState } from '@/states/babyState';
import { selectedDateState } from '@/states/dateState';

import {
  TypeAValues,
  TypeA,
  TypeBValues,
  TypeB,
  TypeCValues,
  TypeC,
} from '@/types/recordTypes';

interface RecordBarProps {
  onRecordUpdated: () => void;
}

const RecordBar: React.FC<RecordBarProps> = ({ onRecordUpdated }) => {
  const [pickDate, setPickTime] = useState(new Date());

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

  const handleButtonClick = async (
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
      await addRecordTypeAMutation.mutateAsync({
        type: queryName,
        userId: userInfo.userId,
        babyId: selectedBaby.babyId,
        amount: 0,
        createdTime: nowTime,
        createdDate: nowDate,
        memo: '',
      });
    } else if (isTypeB(queryName)) {
      await addRecordTypeBMutation.mutateAsync({
        type: queryName,
        userId: userInfo.userId,
        babyId: selectedBaby.babyId,
        createdTime: nowTime,
        createdDate: nowDate,
        memo: '',
      });
    } else if (isTypeC(queryName)) {
      await addRecordTypeCMutation.mutateAsync({
        type: queryName,
        userId: userInfo.userId,
        babyId: selectedBaby.babyId,
        createdTime: nowTime,
        createdDate: nowDate,
        endTime: nowTime,
        memo: '',
      });
    } else if (queryName === 'feedings') {
      await addRecordFeeding.mutateAsync({
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
      await addRecordFever.mutateAsync({
        type: queryName,
        userId: userInfo.userId,
        babyId: selectedBaby.babyId,
        createdTime: nowTime,
        createdDate: nowDate,
        bodyTemperature: 36.5,
        memo: '',
      });
    }

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
