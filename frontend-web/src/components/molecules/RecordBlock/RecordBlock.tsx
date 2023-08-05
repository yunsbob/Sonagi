import Button from '@/components/atoms/Button/Button';
import { RoundedRect } from '@/components/atoms/RoundedRect/RoundedRect';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { PATH } from '@/constants/path';

interface RecordBlockProps {
  color: string;
  recordType: string;
  time: string;
}

const TimeText = styled(Text)`
  margin: 0 20px 0 5px;
  color: ${theme.color.gray1};
`;

const BlockButton = styled(Button)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 14px;
  background-color: ${theme.color.white2};
`;

const RecordBlock: React.FC<RecordBlockProps> = ({
  color,
  recordType,
  time,
}) => {
  const navigate = useNavigate();

  const OnClickButton = () => {
    navigate(PATH.DETAILRECORD);
  };
  return (
    <>
      <BlockButton option="default" size="xLarge" onClick={OnClickButton}>
        <RoundedRect color={color} />
        <TimeText size="medium2">{time}</TimeText>
        <Text size="medium1">{recordType}</Text>
      </BlockButton>
    </>
  );
};

export default RecordBlock;
