import Button from '@/components/atoms/Button/Button';
import { RoundedRect } from '@/components/atoms/RoundedRect/RoundedRect';
import { Text } from '@/components/atoms/Text/Text.styles';
import { Image } from '@/components/atoms/Image/Image';
import theme from '@/styles/theme';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { CombinedRecord } from '@/types/recordTypes';
import iconArrowMiniRightGrey from '@/assets/images/icon-arrow-mini-right-grey.png';

interface RecordBlockProps {
  color: string;
  recordType: string;
  time: string;
  record: CombinedRecord;
  recordId: string | number | undefined;
}

const TimeText = styled(Text)`
  margin: 0 12px 0 5px;
  color: ${theme.color.gray1};
  /* flex-grow: 1; */
`;

const MemoText = styled(TimeText)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: italic;
  margin-left: 18px;
`;

const BlockButton = styled(Button)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 14px;
  padding-right: 8px;
  background-color: ${theme.color.white2};

  img:last-child {
    margin-left: auto;
    justify-content: space-between;
  }
`;

const RecordBlock: React.FC<RecordBlockProps> = ({
  color,
  recordType,
  time,
  record,
  recordId,
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
      <Text size="medium1" style={{ minWidth: 'fit-content' }}>
        {recordType}
        {recordId}
      </Text>
      <MemoText size="medium2">{record.memo}</MemoText>
      <Image
        src={iconArrowMiniRightGrey}
        width={1.3}
        height={1.3}
        style={{ marginRight: '10px' }}
      />
    </BlockButton>
  );
};

export default RecordBlock;
