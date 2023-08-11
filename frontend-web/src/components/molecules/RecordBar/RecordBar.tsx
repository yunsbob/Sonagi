import Button from '@/components/atoms/Button/Button';
import moment from 'moment';
import { RecordBarContainer } from '@/components/molecules/RecordBar/RecordBar.styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedCategoryState } from '@/states/categoryState';
import { Category, RecordData } from '@/types';
import { recordedValues, recordsByCategory } from '@/states/recordState';
import { Text } from '@/components/atoms/Text/Text.styles';
import { PATH } from '@/constants/path';
import { useState } from 'react';
import { useAddRecordTypeA } from '@/apis/Record/Mutations/useAddRecordTypeA';
import { userInfoState } from '@/states/userState';
import { selectedBabyState } from '@/states/babyState';

interface RecordBarProps {
  onRecordUpdated: () => void;
}

const RecordBar = ({ onRecordUpdated }: RecordBarProps) => {
  const [recordBlocks, setRecordBlocks] =
    useRecoilState<RecordData[]>(recordedValues);

  // useRecoilValue는 Recoil상태(atom이나 selector)의 현재 값을 읽어오는 것
  // 상태가 변경될 때마다 UI가 최신 상태를 반영
  const currentCategory = useRecoilValue(selectedCategoryState(PATH.MAIN));
  const records = recordsByCategory[currentCategory || 'All'] || [];

  const today = new Date();
  const [pickDate, setPickTime] = useState<Date>(today);
  const nowTime = moment(pickDate).format('HH:mm:ss');
  const nowDate = moment(pickDate).format('YYYY-MM-DD');

  const [userInfo, setUserInfo] = useRecoilState(userInfoState); // userInfo.name을 가져다쓸것
  const [selectedBaby, setSelectedBaby] = useRecoilState(selectedBabyState);

  const addRecordTypeAMutation = useAddRecordTypeA();

  const handleClick = (
    recordType: string,
    color: string,
    category: Category,
    queryName: string
  ) => {
    addRecordTypeAMutation.mutate({
      type: queryName,
      userId: userInfo.userId,
      babyId: selectedBaby.babyId,
      amount: 0,
      memo: '',
      createdTime: nowTime,
      createdDate: nowDate,
    });

    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const time = `${hours}:${minutes}`;

    setRecordBlocks(oldRecordBlocks => [
      ...oldRecordBlocks,
      { recordType, time, color, category },
    ]);

    // TODO:
    onRecordUpdated();
  };

  return (
    <RecordBarContainer>
      {records.map((record, index) => (
        <Button
          option="default"
          size="xSmall"
          key={index}
          $borderColor={record.color}
          onClick={() =>
            handleClick(
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
