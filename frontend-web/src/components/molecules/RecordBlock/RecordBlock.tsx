import Button from '@/components/atoms/Button/Button';
import { RoundedRect } from '@/components/atoms/RoundedRect/RoundedRect';
import { Text } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { CombinedRecord } from '@/types/recordTypes';

interface RecordBlockProps {
  color: string;
  recordType: string;
  time: string;
  record: CombinedRecord;
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
  record,
}) => {
  const navigate = useNavigate();

  const OnClickButton = () => {
    navigate(PATH.DETAILRECORD, { state: { recordType: recordType } });
  };
  // TODO: 리코드 자체를 전달해서 새 페이지 안에서 뽑아서 쓴다 !!!

  return (
    <BlockButton option="default" size="xLarge" onClick={OnClickButton}>
      <RoundedRect color={color} />
      <TimeText size="medium2">{time}</TimeText>
      <Text size="medium1">{recordType}</Text>
      <TimeText size="medium2" style={{ marginLeft: '20px' }}>
        {record.memo}
      </TimeText>
    </BlockButton>
  );
};

export default RecordBlock;
