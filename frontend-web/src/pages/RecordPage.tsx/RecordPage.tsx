import React from 'react';
import theme from '@/styles/theme';
import { Text } from '@/components/atoms/Text/Text.styles';
import CategoryBar from '@/components/molecules/CategoryBar/CategoryBar';
import RecordBar from '@/components/molecules/RecordBar/RecordBar';
import RecordBlock from '../../components/molecules/RecordBlock/RecordBlock';

const RecordPage: React.FC = () => {
  return (
    <div>
      <CategoryBar></CategoryBar>

      <Text size="headXLarge">기록 블록 1</Text>
      <Text size="headXLarge">기록 블록 2</Text>
      <Text size="headXLarge">기록 블록 3</Text>

      <RecordBlock color={theme.color.categoryMeal}></RecordBlock>

      <RecordBar></RecordBar>
    </div>
  );
};

export default RecordPage;
