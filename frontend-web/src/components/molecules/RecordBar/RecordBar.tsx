import React, { useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import moment from 'moment';
import { RecordBarContainer } from '@/components/molecules/RecordBar/RecordBar.styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedCategoryState } from '@/states/categoryState';
import { Category, RecordData } from '@/types';
import { recordedValues, recordsByCategory } from '@/states/recordState';
import { Text } from '@/components/atoms/Text/Text.styles';
import { PATH } from '@/constants/path';
import { useAddRecordTypeA } from '@/apis/Record/Mutations/useAddRecordTypeA';
import { userInfoState } from '@/states/userState';
import { selectedBabyState } from '@/states/babyState';

interface RecordBarProps {
  onRecordUpdated: () => void;
}

const getCurrentTime = () => {
  const date = new Date();
  return `${String(date.getHours()).padStart(2, '0')}:${String(
    date.getMinutes()
  ).padStart(2, '0')}`;
};

const RecordBar: React.FC<RecordBarProps> = ({ onRecordUpdated }) => {
  const [pickDate, setPickTime] = useState<Date>(new Date());
  const nowTime = moment(pickDate).format('HH:mm:ss');
  const nowDate = moment(pickDate).format('YYYY-MM-DD');

  const [recordBlocks, setRecordBlocks] =
    useRecoilState<RecordData[]>(recordedValues);
  const currentCategory = useRecoilValue(selectedCategoryState(PATH.MAIN));
  const records = recordsByCategory[currentCategory || 'All'] || [];
  const [userInfo] = useRecoilState(userInfoState);
  const [selectedBaby] = useRecoilState(selectedBabyState);

  const addRecordTypeAMutation = useAddRecordTypeA();

  const handleButtonClick = (
    recordType: string,
    color: string,
    category: Category,
    queryName: string
  ) => {
    const validQueries = [
      'infantFormulas',
      'breastFeedings',
      'babyFoods',
      'milks',
      'pumpingBreasts',
    ];
    addRecordTypeAMutation.mutate({
      type: queryName,
      userId: userInfo.userId,
      babyId: selectedBaby.babyId,
      amount: 0,
      memo: '',
      createdTime: nowTime,
      createdDate: nowDate,
    });

    const time = getCurrentTime();
    setRecordBlocks(prev => [...prev, { recordType, time, color, category }]);
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
