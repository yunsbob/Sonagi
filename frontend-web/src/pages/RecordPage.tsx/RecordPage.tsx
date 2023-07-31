import React from 'react';
import theme from '@/styles/theme';
import { Text } from '@/components/atoms/Text/Text.styles';
import CategoryBar from '@/components/molecules/CategoryBar/CategoryBar';
import RecordBar from '@/components/molecules/RecordBar/RecordBar';
import RecordBlock from '../../components/molecules/RecordBlock/RecordBlock';
import { useRecoilValue } from 'recoil';
import { recordBlocksState } from '@/states/RecordState';

const RecordPage: React.FC = () => {
  const recordBlocks = useRecoilValue(recordBlocksState);

  return (
    <div>
      <CategoryBar></CategoryBar>

      {recordBlocks.map((record, index) => (
        <Text size="headXLarge" key={index}>
          {record}
        </Text>
      ))}
      <RecordBlock color={theme.color.categoryMeal}></RecordBlock>

      <RecordBar></RecordBar>
    </div>
  );
};

export default RecordPage;
